'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var server = require('gulp-server-livereload');

var util = require('util');

gulp.task('components', function() {
  return gulp.src('bower_components/**/*')
      .pipe(gulp.dest(conf.paths.tmp + '/serve/bower_components'));
});

gulp.task('serve', ['watch', 'components'], function() {
  gulp.src(
      [
        path.join(conf.paths.tmp, '/serve'),
        conf.paths.src
      ])
      .pipe(server({
        port: 3333,
        livereload: true
      }));
});


