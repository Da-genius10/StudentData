// call a module
const http = require("http")
// create a host
const host = "localhost";
// create a port
const port = 2000;

// create a server instance
const server = http.createServer((req,res) => {
    // show a text content 
    res.writehead(200, {"content-Type": "text/plain"});
    res.end("Hello World");
});

// connect your server to the port
server.listen(port,host, () => {
       console.log(`server is listening on Host:  ${host}`)
});
