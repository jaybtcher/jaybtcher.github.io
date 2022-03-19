var fs = require('fs');

function ReadAppend(file, appendFile){
    fs.readFile(appendFile, function (err,data) {

        if (err) throw err;
        console.log('File was read');

        fs.appendFile(file, data, function (err) {
            if (err) throw err;
            console.log('The "data to append" was appended to file!')
        });

    });

    }

    if ('serviceWorker' in navigator) {
        console.log('service worker works');
        window.addEventListener('load', () => {
          navigator.serviceWorker
          .register('/serviceWorker.js')
          .then(reg => console.log('service worker registered'))
          .catch(err => console.log('Error: ${err}')) 
        })//setting up the service worker
    }
