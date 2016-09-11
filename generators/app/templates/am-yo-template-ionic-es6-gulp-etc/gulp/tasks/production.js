/**
 * Created by AndreyMaznyak on 06.09.2016.
 */
'use strict';
'use strict';
import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = true;

  runSequence(/*['styles', 'images', 'fonts', 'views','add-nw-package','linkLibraries'],*/ 'browserify',/*'nw-build',*/ 'watch', 'ionic:run', cb);

});
