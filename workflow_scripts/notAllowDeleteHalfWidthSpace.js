var path = require('path');
var fs = require("fs");


// async function testEditfile() {

//     var filepath = path.normalize(path.join(__dirname, "../package.json"));
//     fs.readFile(filepath, "utf8", async (err, data) => {
//         data = data.split("\r\n");
//         console.log(data.length);
//         data.push("//sam test");
//         await fs.writeFileSync(filepath, data.join("\r\n"));
//         fs.readFile(filepath, "utf8", async (err, data) => {
//             console.log(data);
//         });
//     });
// }
const rootFolder = process.argv[1].endsWith("workflow_scripts\\notAllowDeleteHalfWidthSpace.js") ? "..\\" : "..\\..\\";
for (let index = 2; index < process.argv.length; index++) {
    var filePath = path.normalize(path.join(__dirname, rootFolder + process.argv[index]))

    var fileInPRBranch = fs.readFileSync(filePath.replace(".md", "-pr.md"), "utf8");
    var fileInMainBranch = fs.readFileSync(filePath, "utf8");
    pr = fileInPRBranch.split("\r\n");
    main = fileInMainBranch.split("\r\n");
    main.forEach((value, index) => {
        if (value.endsWith("  ") && !pr[index].endsWith("  ")) {
            console.log("Risk in delete half-width space!")
        }
    });
}
