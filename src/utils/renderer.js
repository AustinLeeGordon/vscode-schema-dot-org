module.exports = (input, templates) => {
    let keys = Object.keys(templates);

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        let regexString = `<%\\s*${key}\\s*%>`;
        let regex = new RegExp(regexString.replace(/\s/g, ''), 'g');

        input = input.replace(regex, templates[key]);
    }

    return input;
}