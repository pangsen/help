var fs = require('fs')
    , fm = require('front-matter')
    , path = require('path')
    , core = require('@actions/core');
var state = core.getState("samTest");

console.log("start log state");
console.log(state);
console.log(core.state);

// const rootFolder = process.argv[1].endsWith("workflow_scripts\\checkMetadata.js") ? "..\\" : "..\\..\\";
// for (let index = 2; index < process.argv.length; index++) {
//     var filePath = path.normalize(path.join(__dirname, rootFolder + process.argv[index]))
//     if (path.extname(filePath) == ".md") {
//         fs.readFile(filePath, 'utf8', function (err, data) {
//             if (err) throw err
//             var content = fm(data)
//             var checkAttributes = ["title", "metaTitle", "metaDescription", "date", "author"]
//             checkAttributes.forEach(attribute => {
//                 if (!content.attributes[attribute]) {
//                     console.log(attribute + " is required!")
//                 }
//             });

//         })
//     }
// }
