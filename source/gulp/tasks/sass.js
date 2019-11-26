'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');

gulp.task('sass', function () {
	return gulp.src('app/scss/main.scss')
		.pipe(sass()).on('error', sass.logError)
		.pipe(gulp.dest('app/css/'))
		.pipe(connect.reload());
});
