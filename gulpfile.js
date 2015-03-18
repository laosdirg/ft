var gulp = require('gulp')
var path = require('path')
var Builder = require('systemjs-builder')
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var fs = require('fs');
var nodemon = require('gulp-nodemon')
var exec = require('child_process').exec;

gulp.task('develop', ['build'], function () {
  livereload.listen()

  nodemon({ script: 'bin/server.js', ext: 'html js jsx jade', ignore: ['dist/'] })
    .on('restart', function () {
      console.log('Restarted node server!')
    })

  exec('cd modules/flux && jspm link github:laosdirg/flux@dev -y');
  watch(['modules/flux/**/*'], function(){
    console.log('Re-linking flux module')
    exec('cd modules/flux && jspm link github:laosdirg/flux@dev -y', function(){
      gulp.start('build')
    });
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
