const gulp = require('gulp')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css');

gulp.task('concat', () => {
    return gulp.src('./src/styles/*.css').pipe(concat('all.css')).pipe(gulp.dest('./dist/'))
})

gulp.task('minify', () => {
    return gulp.src('./dist/*.css').pipe(cleanCSS({
        compatibility: 'ie8',
        level: {
            2: {
                specialComments: 0,
                all: true
            }
        },
        inline: ['all']
    })).pipe(gulp.dest('./dist/'))
})