/*
* @Author: Administrator
* @Date:   2016-12-24 11:01:34
* @Last Modified by:   Administrator
* @Last Modified time: 2016-12-24 14:42:47
*/

'use strict';
/*less 编译 亚索 合并*/
/*js 合并 压缩 混淆*/
/*ing复制*/
/*html压缩*/


//在gulp 中载入gulp的包 提供一些API
  var gulp = require('gulp')
  var less = require('gulp-less')
  var cssnano = require('gulp-cssnano')
  
   //注册任务
   /*less 编译 亚索 合并 一般预处理css可以用导报src 不用合并*/
   gulp.task('style',function(){
   	//执行style任务自动执行
   	    gulp.src(['src/css/*.less','!src/css/_*.less'])
   	    	.pipe(less())
   	    	.pipe(cssnano())
   	    	.pipe(gulp.dest('dist/css'));
   	    	  .pipe(browerSync.reload({
   	    	stream:true
   	    }));
   })
   /*js 合并 压缩 混淆*/
   var concat = require('gulp-concat')
   var uglify = require('gulp-uglify')
   gulp.task('script',function(){
   	gulp.src('src/script/*.js')
   	   /* .pipe(concat('all.js'))*/
   	    .pipe(uglify())
   	    .pipe(gulp.dest('dist/scripts'))
   	      .pipe(browerSync.reload({
   	    	stream:true
   	    }));
   })
   /*ing复制*/


   // html处理
    var htmlmin = require('gulp-htmlmin')
       gulp.task('html',function(){
   	gulp.src('src/*.html')
   	   .pipe(htmlmin({
   	   	collapseWhitespace:true,
   	   	removeComments:true
   	   }))
   	    .pipe(gulp.dest('dist'))
   	    .pipe(browerSync.reload({
   	    	stream:true
   	    }));
   })

     var browerSync = require('brower-sync')
     gulp.task('serve',function(){
        browerSync({
        	server:{
        		baseDir:['dist']
        	},
        })
        


    gulp.watch('src/css/*.less',['style']);
    gulp.watch('src/script/*.js',['script']);
    gulp.watch('src/*.html',['html']);
     })
