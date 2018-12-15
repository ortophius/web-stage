const gulp = require('gulp');
const debug = require('gulp-debug');
const concat = require('gulp-concat');
const copy = require('gulp-copy');
const rename = require('gulp-rename');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const beautyHtml = require('gulp-html-beautify');
const tobemjson = require('./gulp-html2bemjson.js');
const bundleBuilder = require('gulp-bem-bundle-builder');
const bundlerFs = require('gulp-bem-bundler-fs');
const through = require('through2');
const path = require('path');
const blocksPath = path.join(__dirname, 'blocks');
const distPath = path.join(__dirname, 'dist');
const levels = [
  'blocks',
  'mobile'
];

const builder = bundleBuilder({
    config: {
        levels: {
            'blocks': {scheme: 'nested'},
            'modile': {scheme: 'nested'}
        }
    },
    levels: [
      'blocks',
      'mobile'
    ]
});

const beautifyConfig = {
    "indent_size": 2,
    "indent_char": " ",
    "eol": "\n",
    "indent_level": 0,
    "indent_with_tabs": false,
    "preserve_newlines": true,
    "max_preserve_newlines": 10,
    "jslint_happy": false,
    "space_after_anon_function": false,
    "brace_style": "collapse",
    "keep_array_indentation": false,
    "keep_function_indentation": false,
    "space_before_conditional": true,
    "break_chained_methods": false,
    "eval_code": false,
    "unescape_strings": false,
    "wrap_line_length": 0,
    "wrap_attributes": "auto",
    "wrap_attributes_indent_size": 4,
    "end_with_newline": true
}

const pugConfig = {basedir: blocksPath}
const pathsFromBem = bem => {
    var res = [];
    bem.decl.forEach((entity) => {
        levels.forEach((level) => {
          res.push(path.join(path.join(__dirname, level), entity.block, 'static', '*'));
        })
    });
    return res;
}

gulp.task('deps', () => {
   return gulp.src('bundles/**/*.pug')
    .pipe(pug(pugConfig))
    .pipe(tobemjson())
    .pipe(builder({
        css: bundle => bundle.src('css')
          .pipe(autoprefixer(), {
            browsers: ['last 5 versions', 'ie10']
          })
          .pipe(concat(`${bundle.name+'/'+bundle.name}.css`)),
        js: bundle => bundle.src('js', {deps: false}).pipe(concat(`${bundle.name+'/'+bundle.name}.js`)),
        static: bundle => gulp.src(pathsFromBem(bundle), {base: '.'})
          .pipe(rename(file => {
              file.dirname = path.join(bundle.name, 'static', file.dirname.split(path.sep)[1]);
          }))
          .pipe(debug())
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('html', () => {
    return gulp.src('bundles/**/*.pug')
        .pipe(pug(pugConfig))
        .pipe(beautyHtml(beautifyConfig))
        .pipe(gulp.dest('dist/'));
});

gulp.task('build', gulp.series('deps', 'html'));
gulp.task('watch', function(){
  gulp.watch(['bundles/**/*', 'blocks/**/*', 'mobile/**/*'], gulp.series('build'));
});