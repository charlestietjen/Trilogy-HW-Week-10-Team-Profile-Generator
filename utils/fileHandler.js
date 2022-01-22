const fs = require('fs');

const writeFile = function (fileName, fileContent) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}.html`, fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Created file!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/bulma.min.css', './dist/bulma.min.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Copied file!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };