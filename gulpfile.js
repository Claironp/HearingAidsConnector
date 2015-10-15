var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var less = require('gulp-less');
var runSequence = require('run-sequence');
var jetpack = require('fs-jetpack');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

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
    wwwDir.dir('.', { empty: true });
});

gulp.task('build-js', bundleJS);

gulp.task('build-less', function () {
    return gulp.src('./src/stylesheets/index.less')
    .pipe(less({
         paths: [ path.join(__dirname, 'node_modules') ]
    }))
    .pipe(gulp.dest('./www/css'));
});

gulp.task('build', ['build-less', 'build-js'], function() {
    srcDir.copy('index.html', wwwDir.path('index.html'));
    srcDir.copy('images', wwwDir.path('images'));
    ratchetDir.copy('dist/fonts', wwwDir.path('fonts'));
});

gulp.task('watch', function() {
    b = watchify(b);

    gulp.watch('./src/stylesheets/**/*.less', ['build-less']);
});

gulp.task('package', function(cb) {
    runSequence('clean', 'build', cb);
});

gulp.task('default', function(cb) {
    runSequence('watch', 'package', cb);
});
