// Include node fs (file stream) and https modules
const fs = require('fs');

function readWriteAsync() {
  
  // Update README using FS
      fs.readFile('README.md', 'utf-8', (err, data) => {
        if (err) {
          throw err;
        }

        let currImage = '<img src="https://media.giphy.com/media/oy83DwqHRcR1jJczV3/giphy.gif" align="right" alt="Coder GIF" width="180" height="180">';
        let newImage = '<img src="https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif" align="right" alt="Coder GIF" width="180" height="180">';
        
        const updatedMd = data.replace(currImage,
          newImage
        );

        // Write the new README
        fs.writeFile('README.md', updatedMd, 'utf-8', (err) => {
          if (err) { 
            throw err;
          }

          console.log('README update complete.');
        });
      });
}

// Call the function
readWriteAsync();
