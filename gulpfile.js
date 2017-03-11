/**
 * Created by hf on 2017/2/20.
 */

var gulp=require('gulp');

gulp.task('webpack',function(){
    return gulp.src('./js')
               .pipe(webpack(require('./webpack.config.js')))
               .pipe(gulp.dest('./dist'));
});
