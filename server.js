const express = require('express');
const sftp = require('ssh2-sftp-client');
const fs = require('fs');
const path = require('path');
const config = require('./config.json');

const app = express();
app.use(express.static('client/build'));
let client = new sftp();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/api/data', (req, res) => {
    fs.readFile(config.files.local, (err, data) => {
        if (err) {
            res.send({message: '/api/data: error', data: [[]]})
            console.error(err.message)
        } else {
            try {
                res.send({message: '/api/data: success', data: JSON.parse(data)})
                console.log('/api/data: success')
            } catch(err) {
                res.send({message: '/api/data: error', data: [[]]})
                console.error(err.message)
            }
        }
    });
});

app.get('/api/data/reload', (req, res) => {
    client.connect(config.sftp)
        .then(() => {
            return client.get(config.files.remote, config.files.local);
        }).then(() => {
            res.send({message: '/api/data/reload: success'})
            console.log('/api/data/reload: success')
            return client.end();
        }).catch(e => {
            res.send({message: '/api/data/reload: error'})
            console.error(e.message);
        });
});

app.listen(config.port, config.host, () => console.log(`Listening on host ${config.host} and port ${config.port}`));