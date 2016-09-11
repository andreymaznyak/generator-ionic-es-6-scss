/**
 * Created by AndreyMaznyak on 03.09.2016.
 */
'use strict';
import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = false;

  runSequence(/*['styles', 'images', 'fonts', 'views','add-nw-package','linkLibraries'],*/ 'browserify',/*'nw-build',*/ 'watch', 'ionic:serve', cb);

});
