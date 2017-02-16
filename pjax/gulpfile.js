var gulp = require('gulp');
var browserSync = require('browser-sync');
const sass = require('gulp-sass');

gulp.task('browserSyncTask', function () {
    browserSync({
        server: {
            baseDir: './' // root directory
        }
    });
});

gulp.task('sass', function(){
    gulp.src('./sass/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function(){
    gulp.watch("./sass/*.scss", ['sass']);
    gulp.watch(['./*.html', './css/*.css']).on('change', browserSync.reload);
});

gulp.task('default', ['browserSyncTask','watch']);
