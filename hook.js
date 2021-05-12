var http = require('http'); // 1 - Import Node.js core module
const { exec } = require('child_process');

function uniqueID(){
    function chr4(){
        return Math.random().toString(16).slice(-4);
    }
    return chr4() + chr4() +
        '-' + chr4() +
        '-' + chr4() +
        '-' + chr4() +
        '-' + chr4() + chr4() + chr4();
}

var UIDONETIME = uniqueID();
console.log(UIDONETIME);

var server = http.createServer(function (req, res) {
    if (req.url == '/' + UIDONETIME) {
        exec('sh run.sh')
        res.end();
    } else {
        process.exit();
    }

});

server.listen(5000);
