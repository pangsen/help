var path = require('path');
var fs = require("fs");

const rootFolder = process.argv[1].endsWith("workflow_scripts/notAllowDeleteHalfWidthSpace.js") ? "../" : "../../";
for (let index = 2; index < process.argv.length; index++) {
    var filePath = path.normalize(path.join(__dirname, rootFolder + process.argv[index]))
    
    console.log(filePath);
    if (path.extname(filePath) == ".md") {
        var fileInPRBranch = fs.readFileSync(filePath, "utf8");
        var fileInMainBranch = fs.readFileSync(filePath.replace("\\pr\\","\\main\\"), "utf8");
        pr = fileInPRBranch.split("\n");
        main = fileInMainBranch.split("\n");
        main.forEach((value, index) => {
            console.log(value);
            console.log(pr[index]);
            if (value.endsWith("  ") && !pr[index].endsWith("  ")) {
                console.log("Risk in delete half-width space!")
            }
        });
    }
}
