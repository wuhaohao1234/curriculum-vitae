const ws = require('nodejs-websocket')

const server = ws.createServer(function (conn) {
    conn.on("text", function (str) {
        boardcast(str)
    })
    conn.on('error',function(err){
        console.log('报错了，用户重新刷新了一次')
        console.log(err)
    })
}).listen(8001)

function boardcast(str) {
    server.connections.forEach((conn) => {
        conn.sendText(str)
    })
}