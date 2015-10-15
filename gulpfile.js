var gulp = require('gulp');
var less = require('gulp-less');
var jetpack = require('fs-jetpack');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('build-js', function() {
    return browserify('./src/index.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./www/js'));
});

gulp.task('build-less', function () {
    return gulp.src('./src/stylesheets/index.less')
    .pipe(less())
    .pipe(gulp.dest('./www/css'));
});

gulp.task('build', ['build-less', 'build-js']);


gulp.task('default', ['build']);
