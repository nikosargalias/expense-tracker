const express = require('express');
const app = express();
const path = require('path');
const port = process.send.PORT || 3000;

const publicPath = path.join(__dirname, '..', 'dist');

app.use(express.static(publicPath));

app.get('*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up');
});
