import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

// Create Express Server
const app = express();

// allow cors
app.use(cors());

// setting body-parser
app.use(express.urlencoded({ extended: true }));

// Proxy endpoints
app.use('/', function (req, res, next) {
    const targetURL = req.header('Target-URL');
    fetch(targetURL + req.url)
        .then((res) => res.json())
        .then((json) => {
            res.json(json);
        });
});

app.set('port', process.env.PORT || 5000);

// Start Proxy
app.listen(process.env.PORT || 5000, () => {
    console.log(`Starting Proxy`);
});
