const express = require('express');

const server = express();

// localhost:3000/curso
server.get('/curso',  (req, res) => {
    return res.json({curso: 'Node.js'});
})

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
