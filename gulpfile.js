var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var less = require('gulp-less');
var runSequence = require('run-sequence');
var jetpack = require('fs-jetpack');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var ghPages = require('gulp-gh-pages');
var genSplash = require('ios-splash-generate');
var genIcons = require('ios-icon-resize');

var rootDir = jetpack.cwd(__dirname);
var ratchetDir = rootDir.cwd('node_modules/ratchet');
var srcDir = rootDir.cwd('src');
var wwwDir = rootDir.cwd('www');

var b = browserify('./src/index.js', {
    "transform": ["reactify"]
});
b.on('update', bundleJS);
b.on('log', gutil.log);

function bundleJS() {
    return b.bundle()
    .on('error', function(err) {
        gutil.log(gutil.colors.red('JS error:'), err.message);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./www/js'));
}


gulp.task('clean', function() {
    wwwDir.remove('js');
    wwwDir.remove('css');
    wwwDir.remove('images');
    wwwDir.remove('index.html');
    wwwDir.remove('fonts');
});

gulp.task('build-js', bundleJS);

gulp.task('build-less', function () {
    return gulp.src('./src/stylesheets/index.less')
    .pipe(less({
         paths: [ path.join(__dirname, 'node_modules') ]
    }))
    .pipe(gulp.dest('./www/css'));
});

gulp.task('build-splash', function() {
    wwwDir.dir('images/screen/ios/', { empty: true });
    return genSplash(srcDir.path('images/screen/base.png'), wwwDir.path('images/screen/ios/'));
});

gulp.task('build-icons', function() {
    wwwDir.dir('images/icon/ios/', { empty: true });
    return genIcons(srcDir.path('images/icon/base.png'), wwwDir.path('images/icon/ios/'));
});

gulp.task('build', ['build-less', 'build-js', 'build-splash', 'build-icons'], function() {
    srcDir.copy('index.html', wwwDir.path('index.html'));
    srcDir.copy('images', wwwDir.path('images'));
    ratchetDir.copy('dist/fonts', wwwDir.path('fonts'));
});

gulp.task('watch', function() {
    b = watchify(b);
    gulp.watch('./src/stylesheets/**/*.less', ['build-less']);
});

gulp.task('package-prepare', function(cb) {
    runSequence('clean', 'build', cb);
});

gulp.task('package', ['package-prepare'], function() {
    var distDir = rootDir.dir('dist', { empty: true });

    rootDir.copy('config.xml', distDir.path('config.xml'));
    rootDir.copy('www', distDir.path('www'));
});

gulp.task('deploy', ['package'], function(cb) {
    return gulp.src('./dist/**/*')
    .pipe(ghPages({
        branch: 'builds'
    }));
});

gulp.task('default', function(cb) {
    runSequence('watch', 'package-prepare', cb);
});
