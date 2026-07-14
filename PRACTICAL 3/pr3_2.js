const http = require("http");
const url = require("url");

http.createServer(function (req, res) {

    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname == "/reverse") {

        const text = parsedUrl.query.text;

        if (text) {
            const reversed = text.split("").reverse().join("");

            res.writeHead(200, { "Content-Type": "text/plain" });
            res.write(reversed);
        }
        else {
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.write("Please provide text. Example: /reverse?text=hello");
        }

    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("Page Not Found");
    }

    res.end();

}).listen(3000);

console.log("Server is running at http://localhost:3000");