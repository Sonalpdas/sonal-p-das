const fs = require('fs');

function readWriteAsync() {
    // Update README
    fs.readFile('README.md', 'utf-8', (err, data) => {
        if (err) throw err;
        let currentImg = '<img src="https://media.giphy.com/media/oy83DwqHRcR1jJczV3/giphy.gif" align="right" alt="Coder GIF" width="180" height="180">';
        let newImage = '<img src="https://giphy.com/gifs/web-development-L8K62iTDkzGX6" align="right" alt="Coder GIF" width="180" height="180">';
        const updatedMd = data.replace(
            currentImg,
            newImage
        );

        fs.writeFile('README.md', updatedMd, 'utf-8', (err) => {
            if (err) throw err;
            console.log('README update complete.');
        });
    });
}

readWriteAsync();