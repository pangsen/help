const allowModifyPaths = ["content"];
for (let index = 2; index < process.argv.length; index++) {
    var filePath =process.argv[index];
    allowModifyPaths.forEach(allowModifyPath => {
        if(!filePath.startsWith(allowModifyPath)){
            console.log("Only can modify file in allow folder!")
        }
    });
}