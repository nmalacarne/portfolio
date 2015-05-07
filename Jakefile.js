var web = require('jake-web-utils');

var stylusOpts = {
    src: ['./stylus/*.styl'],
    dest: './public/stylesheets/'
};

desc('serves the application via nodemon');
task('serve', function () {
    web.watchStylus(stylusOpts);

    jake.exec('nodemon bin/www', {interactive: true}, function () {
        complete();
    });
});

desc('builds stylus files');
task('build', function () {
   web.compileStylus(stylusOpts);
});