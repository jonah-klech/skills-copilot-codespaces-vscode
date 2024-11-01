// Create web server
// Create a web server that returns the comments in the comments.json file when a GET request is made to the /comments endpoint.
// The server should return the comments as JSON.
// If the file does not exist, return a 404 status code with the message "Comments not found".
// If any other error occurs, return a 500 status code with the message "Internal server error".
// If the request is made to any other endpoint, return a 404 status code with the message "Not found".

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/comments') {
    fs.readFile('./comments.json', (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('Comments not found');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});