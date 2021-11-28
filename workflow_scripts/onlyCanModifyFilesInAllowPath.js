var path = require('path');



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

const allowModifyPaths = ["content"];
for (let index = 2; index < process.argv.length; index++) {
    var filePath =process.argv[index];
    allowModifyPaths.forEach(allowModifyPath => {
        if(!filePath.startsWith(allowModifyPath)){
            console.log("Only can modify file in allow folder!")
        }
    });
}