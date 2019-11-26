'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('connect', function () {
	connect.server({
		name: 'Dev App',
		root: ['app'],
		port: 8001,
		livereload: true
	});
});
