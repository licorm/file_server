//require packages
const net = require('net');
const fs = require('fs');

const server = net.createServer();
const toSend = '';

server.on('connection', (client) => {
  console.log('New client connected!');
  client.write('Hello there! Searching for your file');
  client.setEncoding('utf8'); // interpret data as text
  client.on('data', (data) => {
    console.log('File to search for locally:', data)
    fs.access(data, fs.F_OK, (err) => {
      if (err) {
        console.error(err)
        return
      }
      console.log('file exists');
      
      reader = fs.createReadStream(data);
      reader.on('data', function (chunk) {
      console.log(chunk.toString());
      client.write(chunk.toString())
    });
  });
  })
});


server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});