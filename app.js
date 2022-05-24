const express = require('express');
const cors = require('cors');

// Create Express Server
const app = express();

// allow cors
app.use(cors());

// setting body-parser
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h2> Hello, user </h2>');
});

// Proxy endpoints
app.use('/govOpenData', require(__dirname + '/route/govOpenData'));

app.set('port', process.env.PORT || 5000);

// Start Proxy with port
const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Starting Proxy:`, server.address());
});
