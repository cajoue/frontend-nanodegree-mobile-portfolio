var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var replace = require('gulp-html-replace');
var sourcemap = require('gulp-sourcemaps');
var minifyhtml = require('gulp-minify-html');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// part 1 Cam's portfolio
// Minifies HTML files and outputs them to dist/*.html
gulp.task('content1', function() {
    return gulp.src('./src/*.html')
        .pipe(minifyhtml({
            empty: true,
            quotes: true
        }))
        .pipe(gulp.dest('./dist/'));
});

// Concats & minifies js files and outputs them to dist/js/app.js
gulp.task('scripts1', function(){
  gulp.src('./src/js/*.js')
    .pipe(sourcemap.init())
      .pipe(uglify())
      .pipe(concat('app.js'))
    .pipe(sourcemap.write())
    .pipe(gulp.dest('./dist/js'))
    .pipe(reload({stream: true}))
});

// Minifies css files and outputs them to dist/css/*.css
gulp.task('styles1', function(){
  gulp.src('./src/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'))
    .pipe(reload({stream: true}))
});

// Optimizes image files and outputs them to dist/img/*
gulp.task('images1', function() {
    return gulp.src('./src/img/*')
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]}))
      .pipe(gulp.dest('./dist/img'));
});

// part 2 Cam's Pizzeria
gulp.task('content2', function() {
    return gulp.src('./src/views/pizza.html')
        .pipe(minifyhtml({
            empty: true,
            quotes: true
        }))
        .pipe(gulp.dest('./dist/views'));
});

// there's only one js file so will not rename it (not even necessary to concat it)
gulp.task('scripts2', function(){
  gulp.src('./src/views/js/*.js')
    .pipe(sourcemap.init())
      .pipe(uglify())
      .pipe(concat('main.js'))
    .pipe(sourcemap.write())
    .pipe(gulp.dest('./dist/views/js'))
    .pipe(reload({stream: true}))
});

gulp.task('styles2', function(){
  gulp.src('./src/views/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/views/css'))
    .pipe(reload({stream: true}))
});

// Optimizes image files and outputs them to dist/views/img/*
gulp.task('images2', function() {
    return gulp.src('./src/views/images/*')
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]}))
      .pipe(gulp.dest('./dist/views/images'));
});

gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: './dist/'
    }
  });

  gulp.watch('./src/views/pizza.html', ['content2']);
  gulp.watch('./src/views/js/*.js', ['scripts2']);
  gulp.watch('./src/views/css/*.css', ['styles2']);
  gulp.watch('./src/views/images/*', ['images2']);
});

gulp.task('default', ['content2', 'scripts2', 'styles2', 'images2', 'serve']);