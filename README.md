# ZURB Template

[![devDependency Status](https://david-dm.org/zurb/foundation-zurb-template/dev-status.svg)](https://david-dm.org/zurb/foundation-zurb-template#info=devDependencies)

hosting [https://atomeon.github.io/sunglasses-english/](https://atomeon.github.io/sunglasses-english/)

**Please open all issues with this template on the main [Foundation for Sites](https://github.com/zurb/foundation-sites/issues) repo.**

This is the official ZURB Template for use with [Foundation for Sites](http://foundation.zurb.com/sites). We use this template at ZURB to deliver static code to our clients. It has a Gulp-powered build system with these features:

* Handlebars HTML templates with Panini
* Sass compilation and prefixing
* JavaScript module bundling with webpack
* Built-in BrowserSync server
* For production builds:
  * CSS compression
  * JavaScript compression
  * Image compression

## Installation

To use this template, your computer needs:

* [NodeJS](https://nodejs.org/en/) (0.12 or greater)
* [Git](https://git-scm.com/)

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
npm install
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.

```git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/atomeon/ingrish.git
git push -u origin master
```
