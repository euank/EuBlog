var gulp = require('gulp');
var browserify = require('gulp-browserify');
var jade = require('gulp-jade');


gulp.task('jade', function() {
  return gulp.src('jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('.'));
});

gulp.task('browserify', function() {
  return gulp.src('js/*.js')
    .pipe(browserify())
    .pipe(gulp.dest('.'));
});

gulp.task('css', function() {
  return gulp.src('css/*.css')
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['browserify']);
  gulp.watch('jade/*.jade', ['jade']);
  gulp.watch('css/*.css', ['css']);
});

gulp.task('default', ['jade', 'browserify', 'css']);
