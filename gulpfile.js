var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var less = require('gulp-less');
var runSequence = require('run-sequence');
var jetpack = require('fs-jetpack');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var genSplash = require('ios-splash-generate');
var genIcons = require('ios-icon-resize');
var phonegapBuild = require('gulp-phonegap-build');
var connect = require('gulp-connect');
var env = require('gulp-env');

var rootDir = jetpack.cwd(__dirname);
var ratchetDir = rootDir.cwd('node_modules/ratchet');
var fontAwesomeDir = rootDir.cwd('node_modules/font-awesome');
var srcDir = rootDir.cwd('src');
var wwwDir = rootDir.cwd('www');

var b = browserify('./src/index.js', {
    'transform': ['reactify']
});
b.on('update', bundleJS);
b.on('log', gutil.log);

function bundleJS() {
    return b.bundle()
    .on('error', function(err) {
        gutil.log(gutil.colors.red('JS error:'), err);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./www/js'));
}


gulp.task('clean', function() {
    wwwDir.remove('js');
    wwwDir.remove('css');
    wwwDir.remove('images');
    wwwDir.remove('index.html');
    wwwDir.remove('config.xml');
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

gulp.task('build', ['build-less', 'build-js'], function() {
    srcDir.copy('index.html', wwwDir.path('index.html'));
    srcDir.copy('images', wwwDir.path('images'));
    rootDir.copy('config.xml', wwwDir.path('config.xml'));
    ratchetDir.copy('dist/fonts', wwwDir.path('fonts'));
    fontAwesomeDir.copy('fonts', wwwDir.path('fonts/font-awesome'));
});

gulp.task('watch', function() {
    b = watchify(b);
    gulp.watch('./src/stylesheets/**/*.less', ['build-less']);
});

gulp.task('package-prepare', function(cb) {
    runSequence('clean', 'build', 'build-splash', 'build-icons', cb);
});

gulp.task('package', ['package-prepare'], function() {
    rootDir.remove('dist');
    wwwDir.copy('.', rootDir.path('dist'));
});

gulp.task('env', function() {
    env({
        file: '.env.json'
    });
});

gulp.task('deploy', ['env', 'package'], function(cb) {
    rootDir.dir('releases', { empty: true });
    return gulp.src('dist/**/*')
    .pipe(phonegapBuild({
        'isRepository': false,
        'appId': process.env.PHONEGAP_APPID,
        'user': {
            'token': process.env.PHONEGAP_TOKEN
        },
        'keys': {
            'ios': {
                'password': process.env.PHONEGAP_IOS_PASSWORD
            }
        },
        'download': {
            'ios': path.resolve(__dirname, 'releases/ios.ipa')
        }
    }));
});

gulp.task('serve', function() {
    connect.server({
        root: wwwDir.cwd(),
        port: 8888
    });
});

gulp.task('default', function(cb) {
    runSequence('watch', 'package-prepare', 'serve', cb);
});
