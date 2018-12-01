const jsonlint = require('jsonlint');
const path = require('path');
const fs = require('fs');

test('Validate javascript.json', () => {
    fs.readFile(path.join(__dirname, '../snippets/javascript.json'), (err, data) => {
        if(err) throw new Error(err);
        let result = jsonlint.parse(`${data}`);
        expect(typeof result).toBe("object");
    });
});

test('Validate json.json', () => {
    fs.readFile(path.join(__dirname, '../snippets/json.json'), (err, data) => {
        if(err) throw new Error(err);
        let result = jsonlint.parse(`${data}`);
        expect(typeof result).toBe("object");
    });
});