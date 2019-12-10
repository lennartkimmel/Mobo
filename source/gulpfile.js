'use strict';

const gulp = require('gulp');
const browsersync = require("browser-sync");
const livereload = require('gulp-livereload');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const jshint = require('gulp-jshint');
const notify = require('gulp-notify');
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

function cleaning(){
	return gulp
		.src(['dist/css', 'dist/js', 'dist/img'], {read: false, allowEmpty: true})
    .pipe(clean());
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
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(uglify())
		.pipe(concat('scripts.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/js/'))
		.pipe(livereload({ start: true }))
}

function images(){
	return gulp
		.src('app/img/*.*')
		.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
		.pipe(gulp.dest('dist/img'))
		.pipe(notify({ message: 'Images task complete' }))
		.pipe(livereload({ start: true }))
}

function move(done){
    console.log('Moving HTML files to dist folder');
    gulp.src('app/*.html')
      .pipe(gulp.dest('dist/'));
    done();
}

function watchFiles(){
	livereload.listen({ basePath: 'dist' })
	gulp.watch('app/scss/**/*.scss', gulp.series(runSass, runCssmin, reload))
	gulp.watch('app/js/*.js', gulp.series(vendor, scripts, reload))
	gulp.watch('app/*.html', gulp.series(move, reload))
	gulp.watch('app/img/*.*', gulp.series(images, reload))
}

const css = gulp.series(runSass, runCssmin);
const js = gulp.parallel(vendor, scripts);
const watch = gulp.series(cleaning, watchFiles);
const defaultTasks = gulp.series(cleaning, runSass, runCssmin, vendor, scripts, images, move, browserSync, watchFiles);

exports.css = css;
exports.js = js;
exports.default = defaultTasks;
exports.move = move;
exports.watch = watch;
