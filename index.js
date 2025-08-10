const express = require('express');
const path = require('path');
const fs = require('fs');
const pages = require('./pages');

const app = express();

app.use(express.static(path.join(__dirname, 'pages')));
app.use("/assets", express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/pages', (req, res) => {
    const allPages = pages.default
    const modPages = allPages.map(p => {
        return {
            id: p.id,
            name: p.name,
            desc: p.desc,
            url: p.url,
            exist: p.url.startsWith('https://') || p.url.startsWith('http://') ? true : fs.existsSync(path.join(__dirname, 'pages', p.url + '.html'))
        }
    });
    res.json(modPages);
});

app.get('/pages/:page', (req, res) => {
    const page = req.params.page;
    const pageData = pages.default.find(p => p.id === page);
    // If the url starts with https or http 
    if (pageData.url.startsWith('https://') || pageData.url.startsWith('http://')) {
        res.redirect(pageData.url);
        return;
    }
    if (pageData) {
        // Check if the page exists using fs
        const pagePath = path.join(__dirname, 'pages', pageData.url + '.html');
           if (fs.existsSync(pagePath)) {
            res.sendFile(pagePath);
        } else {
            res.status(404).sendFile(path.join(__dirname, '404.html'));
        }
    } else {
        res.status(404).sendFile(path.join(__dirname, '404.html'));
    }
});

// Hanlde Error 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;