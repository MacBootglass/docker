var gulp = require('gulp');
var run = require('gulp-run');
var source = "../sources/epiclearning/Qualite/PQ/";

gulp.task('compileLatex', function() {
  return run('cd ' + source + ' && make pq').exec();
});

gulp.task('watch', function() {
  gulp.watch(source + '*.tex', ['compileLatex']);
  gulp.watch(source + '*/*.tex', ['compileLatex']);
  gulp.watch(source + '*/*/*.tex', ['compileLatex']);
});
