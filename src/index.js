const path = require('path');
const fs = require('fs');
const Promise = require('bluebird');
const templates = require('./templates.js');
const renderer = require('./utils/renderer');
const jsonLd = require('./json-ld-snippet');
let snippets = require('./snippets.json');

function buildSnippets() {
    let promises = [];
    let jsonSnippets;
    let javascriptSnippets;

    let outputPath = path.join(__dirname, '../snippets');

    javascriptSnippets = {
        ...snippets,
        "Script JSON-LD": jsonLd
    };

    // Inject templates
    jsonSnippets = renderer(JSON.stringify(snippets), templates);
    javascriptSnippets = renderer(JSON.stringify(javascriptSnippets), templates);

    // Write javascript snippets
    promises.push(fs.writeFile(path.join(outputPath, 'javascript.json'), javascriptSnippets, { encoding: 'ascii' }, err => {
        if (err) console.error(err);
    }));

    // Write json snippets
    promises.push(fs.writeFile(path.join(outputPath, 'json.json'), jsonSnippets, { encoding: 'ascii' }, err => {
        if (err) console.error(err);
    }));

    Promise.all(promises).then(() => {
        console.log('Finished building');
    });
}

buildSnippets();
