var gulp = require('gulp')
var path = require('path')
var Builder = require('systemjs-builder')
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var fs = require('fs');

gulp.task('develop', ['build'], function () {
  livereload.listen()

  return watch(['lib/**/*.js', 'lib/**/*.jsx'], function(){
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
          livereload.reload('config.js');
        })
    }).catch(function(err){
      try{fs.unlinkSync('dist/outfile.js')}
      catch(e){}
      console.log('Build error', err);
      livereload.reload('config.js');
    })

})
