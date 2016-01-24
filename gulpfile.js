var gulp = require('gulp');
var shell = require('gulp-shell');
var path = require('path');

function processNodeschoolRunner(runnerCommand, fullFileName) {
        
    // Derive the nodeschool runner from the full file name.
    // We assume the directory name matches the runner.
    var scriptFile = path.basename(fullFileName);
    var runnerScript = path.basename(path.dirname(fullFileName));
    var commandLine = runnerScript + ' ' +
        runnerCommand + ' ' +
        scriptFile;
        
    console.log('Running ' + commandLine);
    shell.task(commandLine)();
}

gulp.task('test', function() {
    processNodeschoolRunner('run', process.argv[6]);
});

gulp.task('build', function() {
    processNodeschoolRunner('verify', process.argv[6]);
});
