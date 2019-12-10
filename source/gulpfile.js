'use strict';

const gulp = require('gulp');
const browsersync = require("browser-sync");
const livereload = require('gulp-livereload');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

function browserSync(done) {
	browsersync.init({
	  server: {
		baseDir: "./dist",
	  },
	  	port: 3000
	});
	done();
}

function reload(done) {
	browsersync.reload();
	done();
}

function runSass() {
	return gulp
		.src('app/scss/main.scss')
		.pipe(sass()).on('error', sass.logError)
		.pipe(gulp.dest('app/css/'))
		.pipe(livereload({ start: true }))
}

function runCssmin(){
	return gulp
		.src('app/css/main.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/css/'))
		.pipe(livereload({ start: true }))
}

function vendor() {
	return gulp
		.src('app/js/vendor/*.js')
		.pipe(uglify())
		.pipe(concat('vendor.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/js/'))
		.pipe(livereload({ start: true }))
}

function scripts(){
	return gulp
		.src('app/js/app.js')
		.pipe(uglify())
		.pipe(concat('scripts.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/js/'))
		.pipe(livereload({ start: true }))
}

function move(done){
    console.log('Moving all HTML and image files to dist folder');
    gulp.src('app/img/*.*')
      .pipe(gulp.dest('dist/img'));
    gulp.src('app/*.html')
      .pipe(gulp.dest('dist/'));
    gulp.src('app/files/*.*')
      .pipe(gulp.dest('dist/files'));
    done();
}

function watchFiles(){
	livereload.listen({ basePath: 'dist' })

	gulp.watch('app/scss/**/*.scss', gulp.series(runSass, runCssmin, reload))
	gulp.watch('app/js/*.js', gulp.series(vendor, scripts, reload))
	gulp.watch('app/*.html', gulp.series(move, reload))
	gulp.watch('app/img/*.*', gulp.series(move, reload))
}

const css = gulp.series(runSass, runCssmin);
const js = gulp.parallel(vendor, scripts);
const watch = gulp.parallel(watchFiles);
const defaultTasks = gulp.series(runSass, runCssmin, vendor, scripts, move, browserSync, watch);

exports.css = css;
exports.js = js;
exports.default = defaultTasks;
exports.move = move;
exports.watch = watch;
