import gulp from 'gulp';
import fetch from 'node-fetch';
import fs from 'fs';
import pageConfig from './page.config';

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
