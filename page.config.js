import path from 'path';

/**
 * the configuaration of webpach which gonna be fetch
 * @property {string} targetPageName - page name used to be stored.
 * @property {string} targetPage - fetching page url.
 * @property {string} destPath - destination for new fetching file.
 * 
 */
const targetPageName = 'target'

export default {
  targetPageName,
  targetPage: 'https://github.com/',
  destPath: path.join(__dirname, 'src', `${targetPageName}.fetch.html`),
};
