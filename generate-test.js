var suppose = require('suppose');
var fs = require('fs');

suppose('npm', ['run', 'vue-cli:init'], { debug: fs.createWriteStream('generate-test.debug.txt') })
    .when(/Project name\.*/).respond('\n')
    .when(/Project description\.*/).respond('\n')
    .when(/Author\.*/).respond('\n')
    .when(/vue-cli · Generated\.*/).respond('\n')
    .on('error', function (err) {
        console.log('Generate test: ' + err.message);
    })
    .end(function (code) {
        console.log('Generate test: Project generated.');
    });