const gulp = require('gulp');
const rsync = require('rsyncwrapper');

gulp.task('deploy-api', () => {
  rsync({
    src: './',
    dest: 'root@api.bilibios.com:/var/www',
    recursive: true,
    args: ['--verbose'],
    deleteAll: true,
    compareMode: 'checksum',
    exclude: ['.htaccess', 'node_modules'],
    onStdout: (data) => {
      console.log(data.toString()); // eslint-disable-line
    },
  }, function(error, stdout, stderr, cmd) { // eslint-disable-line
    console.log('END!'); // eslint-disable-line
  });
});


gulp.task('deploy-client', () => {
  rsync({
    src: './client/build/',
    dest: 'root@bilibios.com:/var/www',
    recursive: true,
    args: ['--verbose'],
    deleteAll: true,
    compareMode: 'checksum',
    exclude: ['.htaccess', 'node_modules'],
    onStdout: (data) => {
      console.log(data.toString()); // eslint-disable-line
    },
  }, function(error, stdout, stderr, cmd) { // eslint-disable-line
    console.log('END!'); // eslint-disable-line
  });
});
