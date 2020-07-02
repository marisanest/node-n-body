const express = require('express');
const sftp = require('ssh2-sftp-client');
const fs = require('fs');
const config = require('./config.json');

const app = express();
const port = process.env.PORT || 5000;
let client = new sftp();
const remotePath = '/home/mi/marisan/data/n-body.json';
const localPath = './data/n-body.json';

app.get('/api/data', (req, res) => {
    fs.readFile(localPath, (err, data) => {
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
            return client.get(remotePath, localPath);
        }).then(() => {
            res.send({message: '/api/data/reload: success'})
            console.log('/api/data/reload: success')
            return client.end();
        }).catch(e => {
            res.send({message: '/api/data/reload: error'})
            console.error(e.message);
        });
});

app.listen(port, () => console.log(`Listening on port ${port}`));