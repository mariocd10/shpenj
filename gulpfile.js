var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence').use(gulp);

gulp.task('default', function(callback){
	runSequence(['sass','browserSync', 'watch'], callback)
})

// Optimization Process
gulp.task('clean:dist', function(done){
	del.sync('dist');
	done()
})

gulp.task('cache:clear', function(callback){
	return cache.clearAll(callback);
})

gulp.task('images', function(){
	return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
		.pipe(cache(imagemin()))
		.pipe(gulp.dest('dist/images'))		
})
gulp.task('useref', function(){
	return gulp.src('app/*.html')
		.pipe(useref())
		// minifies only if it's a js file
		.pipe(gulpIf('*.js',uglify()))
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist'))
});

gulp.task('move-css', function(){
	return gulp.src('app/css/bootstrap.min.css')
		.pipe(gulp.dest('dist/css'))
})

gulp.task('move-js', function(){
	return gulp.src('app/js/other/*.js')
		.pipe(gulp.dest('dist/js/other'))
})

gulp.task('move-docs', function(){
	return gulp.src('app/docs/*.pdf')
		.pipe(gulp.dest('dist/docs'))
})


// Development Process
gulp.task('browserSync',function(){
	browserSync.init({
		server: {
			baseDir: 'app'
		},
	})
});

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss') //get source files with gulp.src
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
        	stream: true
        }))
});


gulp.task('watch', gulp.series('browserSync','sass'),function(){
	gulp.watch('app/scss/**/*.scss',['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
})

gulp.task('build',gulp.series('clean:dist','sass', 'useref','move-css', 'move-js', 'move-docs', 'images'), function(callback){
	callback;
})