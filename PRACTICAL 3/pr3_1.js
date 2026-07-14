var http = require('http');

http.createServer(function (req, res) {

    var client_req = req.url;
    res.writeHead(200, {'content-type': 'text/html'});

    if(client_req == '/'){
       res.write("<center><h1>Home Page</h1></center>");   
    }

    else if(client_req == '/Exam'){
        res.write(`<table border = "1">
            <tr>
            <th>DATE</th>
            <th>SUBJECT</th>
            </tr>
            <tr><td>03/08/2026</td><td>Software Package</td></tr>
            <tr><td>04/08/2026</td><td>Mobile App Development</td></tr>
            <tr><td>05/08/2026</td><td>Computer Networks</td></tr>
            <tr><td>06/08/2026</td><td>Machine Learning</td></tr>`);
        }        
    else{
        res.write("<center><h1>Page Not Found</h1></center>");
    }
    res.end();
}).listen(3000);

console.log("Application is running on http://localhost:3000");



