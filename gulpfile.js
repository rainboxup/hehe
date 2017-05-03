var gulp = require('gulp'),
    cssnano=require('gulp-cssnano'),
    htmlmin=require('gulp-htmlmin'),
    browserSync=require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');



gulp.task('css', function () {
    gulp.src('./page/*.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'ie 8'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
    .pipe(cssnano())
        .pipe(gulp.dest('./xcss'));
});

gulp.task('html',function(){
    gulp.src('./index.html')
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest('./page/'))
    });

gulp.task('w',function(){

browserSync.init({
    server:'./page', // 指定一个网站的根目录
    files:['./page/css/index.css','./page/index.html']
  });

    gulp.watch(['./css/*.css','./index.html'],['css','html'])
    });