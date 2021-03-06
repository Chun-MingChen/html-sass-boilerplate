import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import fetch from 'node-fetch';
import runSequence from 'run-sequence';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import cssnano from 'gulp-cssnano';
import rename from 'gulp-rename';
import header from 'gulp-header';
import pageConfig from './page.config';
import config from './config';

gulp.task('fetch:website', () => {
  const { targetPage, destPath } = pageConfig;

  console.log('\x1b[32m%s\x1b[0m', 'now start fetching website content :)');
  fetch(targetPage)
    .then(({ body }) => {
      const dest = fs.createWriteStream(destPath);
      body.pipe(dest);
    })
    .then(() => {
      console.log('\x1b[32m%s\x1b[0m', 'fetching website content successfully :)\n');
      console.log('\x1b[32m%s\x1b[0m', `target page was stored in:\n ${destPath}\n`);
    })
    .catch(error => {
      console.log('\x1b[31m%s\x1b[0m', 'fetching content failed :(');
      console.error(error);
    });
});


gulp.task('css:generate', function() {
  // there are two sub-task to do
  // 1. generate css
  // 2. add header in front of content.

  runSequence('css:minify', 'addHeader');
});

/* This part is to minify css
 * what we do is
 * 1. auto-prefix
 * 2. minify
 * 3. generate file into dist
 */
gulp.task('css:minify', function() {
  const { cssBasePath, renameSetting, destination } = config;
  const plugins = [
    autoprefixer({
      browsers: ['> 1%'],
    }),
  ];

  console.log('\x1b[32m%s\x1b[0m', 'now start minifying css :)');

  return gulp.src(path.join(cssBasePath, 'index.css'))
    .pipe(postcss(plugins))
    .pipe(cssnano())
    .pipe(rename(renameSetting))
    .pipe(gulp.dest(destination));
});

gulp.task('addHeader', function() {
  const { author, destination } = config;

  // header prefix to css content
  const HEADER_INFO = [
    '/*',
    ` * @author: ${author}`,
    ` * @timestamps: ${new Date()}`,
    ' */',
    '',
  ].join('\n');

  console.log('\x1b[32m%s\x1b[0m', 'now prepending headers :)');

  // add header for all the css file in {destination}.
  return gulp.src(`${destination}/*`)
    .pipe(header(HEADER_INFO))
    .pipe(gulp.dest(destination));
});
