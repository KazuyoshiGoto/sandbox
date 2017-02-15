var gulp = require('gulp');
var browserSync = require("browser-sync");

// タスクの設定
gulp.task("browserSyncTask", function () {
    browserSync({
        server: {
            baseDir: "./" // ルートとなるディレクトリを指定
        }
    });

    // srcフォルダ以下のファイルを監視
    gulp.watch("./**", function() {
        browserSync.reload();   // ファイルに変更があれば同期しているブラウザをリロード
    });
});

gulp.task('default', ['browserSyncTask']);
