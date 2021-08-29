const { src, dest, watch, series } = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


function buildJs() {
  return src(['src/**/*.js', 'src/*.js'])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat('allJs.js'))
    .pipe(dest('build/js'));
}

function buildStyles() {
  return src(['src/**/*.scss', 'src/*.scss'])
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('/allStyles.css'))
    .pipe(dest('build/css'));
}

function watchAll() {
  watch(['src/**/*.js', 'src/*.js'], buildJs);
  watch(['src/**/*.scss', 'src/*.scss'], buildStyles);
}

exports.buildJs = buildJs;
exports.buildStyles = buildStyles;
exports.watchAll = watchAll;
exports.default = series(buildJs, buildStyles, watchAll);