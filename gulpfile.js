'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

sass.compiler = require('node-sass')

gulp.task('sass', buildStyles)

gulp.task('default', watch)

function buildStyles() {
    return gulp
        .src('./styles/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./styles/css'))
}
  
function watch() {
    gulp.watch('./styles/scss/**/*.scss', buildStyles);
}
