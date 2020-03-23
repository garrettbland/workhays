const fs = require('fs')
require('dotenv').config()

// if (fs.existsSync('./version.json')) {
//     // file exists
//     // delete old or current version
//     fs.unlink('version.json', err => {
//         if (err) throw err
//         console.log('old version.json was deleted...')
//     })
// }

// version for new bundle
const version = Date.now()

// create new version json file
fs.writeFile('./version.json', '{"version":"' + version + '"}', err => {
    if (err) throw err
    console.log('New version ==> (' + version + ') ')
})
