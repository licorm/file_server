//require packages
const net = require('net');
const fs = require('fs');

//declare a variable for the filepath we are looking for

const filepath = './index.html'

//create a connection locally
const conn = net.createConnection({ 
  host: 'localhost', 
  port: 3000 
});

//sends out filename
conn.on('connect', () => {
  conn.write(filepath);
});

// interpret data as text
conn.setEncoding('utf8'); // interpret data as text

conn.on('data', (data) => {
  console.log('Server says: ', data);
});

