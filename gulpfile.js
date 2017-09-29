const gulp = require('gulp');
const plumber = require('gulp-plumber');
const coffee = require('gulp-coffee');
const livereload = require('gulp-livereload');
const run_server = require('./server');
const browserify = require('gulp-browserify');
    
gulp.task('coffee', function() {
    gulp.src('./src/main.coffee')
        .pipe(plumber())
        .pipe(coffee({bare: true}))
        .pipe(browserify({
            transform: ['coffeeify'],
            extensions: ['.coffee']
        }))
        .pipe(gulp.dest('./public/assets'))
        .pipe(livereload({
            reloadPage: 'index.html'
        }));
});

gulp.task('default', ['coffee'], function() {
    livereload.listen();
    run_server();
	gulp.watch('./src/*.coffee', ['coffee']);
});