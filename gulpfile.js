var gulp = require('gulp')
var path = require('path')
var Builder = require('systemjs-builder')
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

gulp.task('default', ['build'], function (cb) {
  livereload.listen()

  watch(['lib/**/*.js', 'lib/**/*.jsx'], function(){
    gulp.start('build');
  })

});

gulp.task('build', function(){
  var builder = new Builder()

  return builder
    .loadConfig('./config.js')
    .then(function(){
      return builder.build('bin/browser', 'dist/outfile.js', { sourceMaps: true, lowResSourceMaps: true })
        .then(function() {
          console.log('Build complete');
          livereload.reload('dist/outfile.js');
        })
    }).catch(function(err){
      console.log('Build error', err);
    })
})
