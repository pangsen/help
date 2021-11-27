
console.log(process.argv)
var fs = require('fs');
var path = require('path');
async function test() {
    console.log("hello world!");
}
async function testEditfile() {
   
    var filepath = path.normalize(path.join(__dirname, "../package.json"));
    fs.readFile(filepath, "utf8", async (err, data) => {
        data = data.split("\r\n");
        console.log(data.length);
        data.push("//sam test");
        await fs.writeFileSync(filepath, data.join("\r\n"));
        fs.readFile(filepath, "utf8", async (err, data) => {
            console.log(data);
        });
    });
}
async function fileNotAllowToModify() {
    // for (let index = 2; index < process.argv.length; index++) {
    //     const filePath = process.argv[index];
    //     const { mtime } = fs.statSync(file)
    //     console.log(filePath);
    // }
    
    console.log(path.normalize(path.join(__dirname, "../.github/workflows/node.js.yml")));
}
fileNotAllowToModify();
//testEditfile();