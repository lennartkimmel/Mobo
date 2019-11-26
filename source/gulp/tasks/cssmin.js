'use strict';

const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const connect = require('gulp-connect');

gulp.task('cssmin', ['sass'],function () {
	gulp.src('app/css/main.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/css/'))
		.pipe(connect.reload());
});
