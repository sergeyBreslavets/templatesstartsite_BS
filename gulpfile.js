'use strict';

// include gulp
var gulp       = require('gulp');

// include plug-ins
var changed    = require('gulp-changed');
var imagemin   = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var jshint     = require('gulp-jshint');
var concat     = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify     = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS  = require('gulp-minify-css');
var sass       = require('gulp-sass');
var jade       = require('gulp-jade');

//src file
var imgSrc     = './src/images/**/*';
var sourcesjs  = './src/scripts/*.js';
var htmlSrc        = './src/html/*.html';
var srcjade        ='./src/jade/*.jade';

//src target
var csstarget      = './www/assets/styles/';
var htmlDst        = './www/';
var sasstarget     = './www/assets/styles';
var pathjstarget   = './www/assets/scripts/';
var fontsTarget    = './www/assets/fonts/';
var imgDst         = './www/assets/images';
var jadetarget     = './www/';

// tasks 
gulp.task('copyfont', function() {
    gulp.src('./bower_components/material-design-icons/iconfont/*')
        .pipe(gulp.dest(fontsTarget));
});

//jade task
gulp.task('jade', function() {
  gulp.src([srcjade])
    .pipe(jade())
    .pipe(gulp.dest(jadetarget))

}); 

// JS hint task
gulp.task('jshint', function() {
    gulp.src('./src/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
// minify new images
gulp.task('imagemin', function() {
    gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});
// minify new or changed HTML pages
gulp.task('htmlpage', function() {
    gulp.src(htmlSrc)
        .pipe(changed(htmlDst))
        .pipe(minifyHTML())
        .pipe(gulp.dest(htmlDst));
});
// JS concat, strip debugging and minify
gulp.task('scripts', function() {
   gulp.src(sourcesjs)
        .pipe(concat('script.js'))
        .pipe(stripDebug())
        .pipe(uglify())

    .pipe(gulp.dest(pathjstarget));
});

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
    gulp.src(['./src/styles/*.css'])
        .pipe(concat('styles.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(csstarget));
});

//sass task
gulp.task('sass', function() {
    gulp.src('./src/sass/styles.sass')
        /*.pipe(sourcemaps.init())*/
        .pipe(sass({
            errLogToConsole: true
        }))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(sasstarget));
});

// default gulp task
gulp.task('default', ['imagemin', /*'htmlpage', */ 'scripts', 'styles', 'sass', 'jade'], function() {
    // watch for HTML changes
   // gulp.watch('./src/*.html', function() {
   //     gulp.run('htmlpage');
   // });

    // watch for JS changes
    gulp.watch('./src/scripts/*.js', function() {
        gulp.run('jshint', 'scripts');
    });

    // watch for CSS changes
    gulp.watch('./src/styles/*.css', function() {
        gulp.run('styles');
    });
    gulp.watch('./src/sass/{,*/}*.{scss,sass}', function() {
        gulp.run('sass');
    });
    gulp.watch('./src/images/**/*', function() {
        gulp.run('imagemin');
    });

   gulp.task('./src/jade/**/*', function(){
 gulp.run('jade');
});

});


