var gulp = require('gulp')
var path = require('path')
var Builder = require('systemjs-builder')
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var fs = require('fs');
var nodemon = require('gulp-nodemon')

gulp.task('develop', ['build'], function () {
  livereload.listen()

  nodemon({ script: 'bin/server.js', ext: 'html js jsx jade', ignore: ['dist/'] })
    //.on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!')
    })

  return watch(['bin/**/*.js', 'lib/**/*.js', 'lib/**/*.jsx'], function(){
    gulp.start('build');
  })

});

gulp.task('build', function(){
  var builder = new Builder()

  return builder
    .loadConfig('./config.js')
    .then(function(){
      return Promise.all(
        [ builder.build('lib/ft', 'dist/ft.js')
            .then(function() {
              console.log('Build ft.js complete')
            })
        , builder.build('bin/browser', 'dist/outfile.js', { sourceMaps: true, lowResSourceMaps: true })
          .then(function() {
            console.log('Build outfile.js complete');
            livereload.reload('config.js');
          })
        ]
      )
    }).catch(function(err){
      try{fs.unlinkSync('dist/outfile.js')}
      catch(e){}
      console.log('Build error', err);
      livereload.reload('config.js');
    })

})
