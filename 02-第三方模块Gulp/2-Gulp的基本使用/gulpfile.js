//引用gulp模块
const gulp = require('gulp')
//引入htmlmin
const htmlmin = require('gulp-htmlmin')
const csso = require('gulp-csso')
const less = require('gulp-less')
//使用gulp.task建立任务    
//1.任务的名称   
//2.任务的回调函数   
gulp.task('first', () => {
    console.log('first任务执行了')
    // 1.使用gulp.src获取要处理的文件  
    //这里只是进行的拷贝操作 可以借助一些gulp插件来完成其他工作
    gulp.src('./src/css/normalize.css')
        .pipe(gulp.dest('./dist/css'))
})

//html任务   
//1.html文件中代码的压缩操作  
//2.抽取html文件中公共的代码   
gulp.task('htmlmin', () => {
    gulp.src('./src/*.html')
        //压缩html文件中的代码
        //true 表示要压缩空格
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))
})

//css任务   
//1.less语法转化  
//2.css代码压缩  
gulp.task('cssmin', () => {
    //选择css目录下的less文件和css文件
    gulp.src(['./src/css/*.less', './src/css/*.css'])
        //将less语法转化为css语法
        .pipe(less())
        //将css文件压缩
        .pipe(csso())
        //将处理结果进行输出
        .pipe(gulp.dest('./dist/css'))
})

//当把html,css,js,img等都从src弄到dist中，dist中就可以运行了  

//构建任务(执行这个任务，里面的任务都会执行)
//新版本的Gulp不支持下面的写法了
//gulp.task('default', ['htmlmin', 'cssmin'])
//改用这个了
gulp.task('default', gulp.series('htmlmin', 'cssmin'))
