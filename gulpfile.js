var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch([
        'index.html',
        'content/*.md',
        'css/*.css',
        'images/**/*',
        'js/*.js',
        'lib/*.js'
    ]).on('change', browserSync.reload);
});
