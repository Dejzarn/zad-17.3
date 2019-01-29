process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        process.stdout.write(input);
    }
});