var npid = require('npid'),
    http = require('http');

if (process.env.NODE_PID_FILE) {
  npid.create(process.env.NODE_PID_FILE).removeOnExit();
} else {
  npid.create('/srv/nile/shared/pid/nile.pid').removeOnExit();
}

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('OK\n');
}).listen(9000, '127.0.0.1');
