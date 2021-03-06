var path = require('path');
var fs = require("fs");

const rootFolder = process.argv[1].endsWith("workflow_scripts/notAllowDeleteHalfWidthSpace.js") ? "../" : "../../";
for (let index = 2; index < process.argv.length; index++) {
    var filePath = path.normalize(path.join(__dirname, rootFolder + process.argv[index]))
    if (path.extname(filePath) == ".md") {
        var fileInPRBranch = fs.readFileSync(filePath, "utf8");
        var mainPath = filePath.replace("/pr/", "/main/");
        var fileInMainBranch = fs.readFileSync(mainPath, "utf8");
        pr = fileInPRBranch.split("\n");
        main = fileInMainBranch.split("\n");
        main.forEach((value, index) => {
            if (value.endsWith("  ") && !pr[index].endsWith("  ")) {
                console.log("Risk in delete half-width space! line:" + (index + 1) + " in file " + process.argv[index]);
                console.log("Main:" + value);
                console.log("PR:" + pr[index]);
            }
        });
    }
}
