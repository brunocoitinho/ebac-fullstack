const gulp = require('gulp')
const saas = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')


function sassCompiler(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(saas({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

function imgMinifier(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function javascriptMinifier(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts/'))
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss',{ignoreInitial:false}, gulp.series(sassCompiler))
    gulp.watch('./source/images/*',{ignoreInitial: false} ,gulp.series(imgMinifier))
    gulp.watch('./source/scripts/*.js',{ignoreInitial: false} ,gulp.series(javascriptMinifier))
}
