'use strict';

const gulp = require('gulp');

gulp.task('default', ['sass', 'vendor', 'scripts', 'cssmin', 'move', 'connect', 'watch']);
