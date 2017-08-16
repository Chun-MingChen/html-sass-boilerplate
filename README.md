# Boilerplate for building static website with sass

It's a front-end template aims to building robust and adaptable web sites with `sass` and `babel`.

## Getted started
```sh
cd html-sass-boilerplate
yarn 
yarn dev
```
After `yarn dev`, it should open the browser automatically then you could start develop.

## Adding a CSS Preprocessor
First, you could write your css style directly within file `src/assets/stylesheet/index.css`. However, if you wanna develop more efficiently, `CSS preprocessors` might be your good partner.

You could compile your file `Sass, Less etc` to `css` by following command.
```sh
yarn build-css
```

when you are developing, you may need to start with `watch mode`. It will compile automatically as long as the file was modified.
```sh
yarn watch-css
```



### Todo
- [x] css watch
- [ ] autoprefix 
- [ ] open the browser automatically
- [ ] node babel watch
- [ ] sync the online website



