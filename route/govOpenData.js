const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.get('/ntp', async (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log('client:', ip);
    const targetURL = req.header('Target-URL');
    const r = await fetch(targetURL);
    console.log('r', r);
    const data = await r.json();
    console.log('data', data);
    res.json(data);
});
module.exports = router;
