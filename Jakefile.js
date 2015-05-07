var web = require('jake-web-utils');

desc('serves the application via nodemon');
task('serve', function () {
    web.watchStylus({
        src: ['./stylus/*.styl'],
        dest: './public/stylesheets/'
    });

    jake.exec('nodemon bin/www', {interactive: true}, function () {
        complete();
    });
});