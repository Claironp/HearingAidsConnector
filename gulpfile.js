var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var runSequence = require('run-sequence');
var jetpack = require('fs-jetpack');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var rootDir = jetpack.cwd(__dirname);
var ratchetDir = rootDir.cwd('node_modules/ratchet');
var srcDir = rootDir.cwd('src');
var wwwDir = rootDir.cwd('www');

gulp.task('clean', function() {
    wwwDir.dir('.', { empty: true });
});

gulp.task('build-js', function() {
    return browserify('./src/index.js', {
            "transform": ["reactify"]
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./www/js'));
});

gulp.task('build-less', function () {
    return gulp.src('./src/stylesheets/index.less')
    .pipe(less({
         paths: [ path.join(__dirname, 'node_modules') ]
    }))
    .pipe(gulp.dest('./www/css'));
});

gulp.task('build', ['build-less', 'build-js'], function() {
    srcDir.copy('index.html', wwwDir.path('index.html'));
    ratchetDir.copy('dist/fonts', wwwDir.path('fonts'));
});


gulp.task('default', function(cb) {
    runSequence('clean', 'build', cb);
});
