/**
 * Created by AndreyMaznyak on 06.09.2016.
 */
'use strict';
import gulp from 'gulp';

import gulp_load_plugins from 'gulp-load-plugins';

const plugins = gulp_load_plugins();
const run = 'android';

gulp.task('ionic:run', plugins.shell.task([
  'ionic run ' + run
]));
