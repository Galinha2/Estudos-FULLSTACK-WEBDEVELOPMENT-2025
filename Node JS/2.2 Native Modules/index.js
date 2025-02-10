const newfs = require('fs') // fs = File System

newfs.readFile('/Users/henriquegalinha/Documents/VS Code/Estudos-FULLSTACK-WEBDEVELOPMENT-2025/Node JS/2.2 Native Modules/message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

newfs.writeFile('testmsg.txt', 'Hello from node', (err) => {
    if (err) throw err;
    console.log('IT WORKED');
});
