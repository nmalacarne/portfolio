desc('serves the application via nodemon');
task('serve', {async: true}, function () {
    jake.exec('nodemon bin/www', {interactive: true}, function () {
        complete();
    });
});