const ws = require('nodejs-websocket')

const server = ws.createServer(function (conn) {
    console.log("New connection")
    conn.on("text", function (str) {
        console.log(str)
        boardcast(str)
    })
    conn.on('error',function(err){
        console.log(err)
    })
}).listen(8001)

function boardcast(str) {
    server.connections.forEach((conn) => {
        conn.sendText(str)
    })
}