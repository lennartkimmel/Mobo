const gulp = require('gulp');

gulp.task('move', [], function() {
  console.log('Moving all PHP and image files in dist folder');
  gulp.src('app/img/*.*')
    .pipe(gulp.dest('dist/img'))
  gulp.src('app/*.php')
    .pipe(gulp.dest('dist/'));
  gulp.src('app/files/*.*')
    .pipe(gulp.dest('dist/files'));
});