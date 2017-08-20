import path from 'path';

export default {
  destination: path.join(__dirname, 'dist'),
  cssBasePath: path.join(__dirname, 'src', 'assets', 'stylesheet'),
  renameSetting: {
    suffix: '.min',
  },
  author: 'ChunMing',
};
