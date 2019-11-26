'use strict';

const gulp = require('gulp');

gulp.task('watch', function () {
	gulp.watch('app/scss/**/*.scss', ['sass', 'cssmin']);
	gulp.watch('app/js/*.js', ['vendor', 'scripts']);
	gulp.watch('app/*.php', ['move']);
	gulp.watch('app/img/*.*', ['move']);
});
