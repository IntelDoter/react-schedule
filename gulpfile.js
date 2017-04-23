'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./dev/styles/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dev/styles/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./dev/styles/sass/**/*.scss', ['sass']);
});