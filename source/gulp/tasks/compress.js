'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const connect = require('gulp-connect');
const concat = require('gulp-concat');


gulp.task('vendor', function () {
	gulp.src('app/js/vendor/*.js')
		.pipe(uglify())
		.pipe(concat('vendor.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/js/'))
		.pipe(connect.reload());
});

gulp.task('scripts', function () {
	gulp.src('app/js/app.js')
		.pipe(uglify())
		.pipe(concat('scripts.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/js/'))
		.pipe(connect.reload());
});