const gulp = require('gulp');
const babel = require('gulp-babel');
var watch = require('gulp-watch');
var paths={
	scriptses6:{
		srcEs:'./src/**/*.es',
		srcDist:'build/src',
		appjs:'./app.js',
		appdist:'build'
	}
}
gulp.task('srcjs', () =>
    gulp.src(paths.scriptses6.srcEs)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest(paths.scriptses6.srcDist))
);
gulp.task('appjs', () =>
    gulp.src(paths.scriptses6.srcEs)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest(paths.scriptses6.srcDist))
);
gulp.task('watch',()=>{
	gulp.watch(['./src/**/*.es','./app.js'],['srcjs','appjs'])
})
gulp.task('default',['srcjs','appjs']);