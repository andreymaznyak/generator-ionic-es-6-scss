/**
 * Created by AndreyMaznyak on 06.09.2016.
 */
'use strict';
'use strict';
import gulp from 'gulp';

import gulp_load_plugins from 'gulp-load-plugins';

const plugins = gulp_load_plugins();

gulp.task('ionic:serve', plugins.shell.task([
  'ionic serve '
]));
