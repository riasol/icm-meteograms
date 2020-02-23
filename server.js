var http = require('http')
var url = require('url')
var fs = require('fs')
const path = require('path')

http.createServer(function (request, response) {
    let requestUrl = url.parse(request.url).path;
    if (requestUrl === '/') {
        requestUrl = '/index.html'
    }
    requestUrl=requestUrl.substr(1)
    const localPath = path.resolve('build', requestUrl)
    if (fs.existsSync(localPath)) {
        response.writeHead(200)
        fs.createReadStream(localPath).pipe(response)
    } else {
        response.writeHead(400)
    }
}).listen(80)