/**
 * Created by dhiren.sahu on 03-01-2017.
 */
var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var del = require('del');

var browserSync = require('browser-sync').create();

gulp.task('imagemin', function() {
    var img_src = 'images/**/*.+(png|jpg|gif)', img_dest = 'build/images';

    gulp.src(img_src)
        .pipe(changed(img_dest))
        .pipe(imagemin())
        .pipe(gulp.dest(img_dest));
});


gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'build'
        },
    })
});

gulp.task('styles', function() {
    gulp.src(['app/css/*.css'])
        .pipe(concat('styles.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', function(){
    gulp.src('app/component/*.js' )
        .pipe(concat('script.js'))
        //.pipe(ngmin({dynamic: false}))
        .pipe(uglify({compress:true}))
        .pipe(gulp.dest('build'));
});


gulp.task('app', function(){
    var module_src = 'app/*.js', module_dest = 'build';
    gulp.src(module_src)
        .pipe(changed(module_dest))
        .pipe(gulp.dest(module_dest));
});

gulp.task('bower_component', function(){
    var bower_component_src = 'app/bower_components/**/*', bower_component_dest = 'build/bower_components';
    gulp.src(bower_component_src)
        .pipe(changed(bower_component_dest))
        .pipe(gulp.dest(bower_component_dest));
});

gulp.task('dist', function(){
    var dist_src = 'app/dist/**/*', dist_dest = 'build/dist';
    gulp.src(dist_src)
        .pipe(changed(dist_dest))
        .pipe(gulp.dest(dist_dest));
});

gulp.task('view', function(){
    var view_src = 'app/view/*.html', view_dest = 'build/view';
    gulp.src(view_src)
        .pipe(changed(view_dest))
        .pipe(gulp.dest(view_dest));
});
gulp.task('data', function(){
    var data_src = 'app/data/*.json', data_dest = 'build/data';
    gulp.src(data_src)
        .pipe(changed(data_dest))
        .pipe(gulp.dest(data_dest));
});


gulp.task('html', function(){
    gulp.src('app/build/index.html')
        .pipe(gulp.dest('build'));
});

/*gulp.task('clean:build', function() {
    //return del.sync('build');
    return del([
        'build/temp/',
        // instructs to clean temp folder
        '!build/package.json'
    // negate to instruct not to clean package.json file ]);
});*/


gulp.task('default', ['browserSync','imagemin','bower_component','view','data','styles','dist', 'app', 'js', 'html'], function (){
    gulp.watch('src/styles/*.css', ['styles']);
    gulp.watch('src/scripts/*.js', ['js']);
    gulp.watch('app/build/index.html', ['html']);
});
