const gulp = require('gulp')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const jsmin = require('gulp-jsmin');

gulp.task('css', () => {
    return gulp.src('./src/css/*.css').pipe(concat('all.css')).pipe(gulp.dest('./dist/').on('end',
        function () {
            return gulp.src('./dist/*.css').pipe(cleanCSS({
                compatibility: 'ie8',
                level: {
                    1: {
                        all: true,
                        specialComments: 0
                    },
                    2: {
                        all: true
                    }
                },

            })).pipe(gulp.dest('./dist/'))
        }))
})


gulp.task('js', () => {
    return gulp.src('./src/js/*.js').pipe(concat('script.js')).pipe(gulp.dest('./dist/').on('end',
        function () {
            gulp.src('./dist/*.js')
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(gulp.dest('dist').on('end', function () {
                    return gulp.src('dist/*.js')
                        .pipe(jsmin())
                        .pipe(gulp.dest('dist'));
                }))
        }))
})