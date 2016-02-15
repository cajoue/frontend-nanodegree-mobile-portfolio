var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var replace = require('gulp-html-replace');
var sourcemap = require('gulp-sourcemaps');

// part 1 Cam's portfolio
gulp.task('content1', function(){
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(reload({stream: true}))
});

gulp.task('scripts1', function(){
  gulp.src('./src/js/*.js')
    .pipe(sourcemap.init())
      .pipe(uglify())
      .pipe(concat('app.js'))
    .pipe(sourcemap.write())
    .pipe(gulp.dest('./dist/js'))
    .pipe(reload({stream: true}))
});

gulp.task('styles1', function(){
  gulp.src('./src/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'))
    .pipe(reload({stream: true}))
});

// add image optimization 'images1' ./src/img/*'

// part 2 Cam's Pizzeria
gulp.task('content2', function(){
  gulp.src('./src/views/pizza.html')
    .pipe(gulp.dest('./dist/views/'))
    .pipe(reload({stream: true}))
});

gulp.task('scripts2', function(){
  gulp.src('./src/views/js/*.js')
    .pipe(sourcemap.init())
      .pipe(uglify())
      .pipe(concat('app.js'))
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

// add image optimization 'images2' ./src/views/images/*'

gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: './dist/'
    }
  });

  gulp.watch('./src/index.html', ['content1']);
  gulp.watch('./src/js/*.js', ['scripts1']);
  gulp.watch('./src/css/*.css', ['styles1']);
  gulp.watch('./src/views/pizza.html', ['content2']);
  gulp.watch('./src/views/js/*.js', ['scripts2']);
  gulp.watch('./src/views/css/*.css', ['styles2']);
});

gulp.task('default', ['content1', 'scripts1', 'styles1', 'content2', 'scripts2', 'styles2', 'serve']);