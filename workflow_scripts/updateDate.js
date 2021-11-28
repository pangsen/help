var fs = require('fs')
    , fm = require('front-matter')
    , path = require('path')
    , core = require('@actions/core')
core.info(`samTest: ddd`);
core.setOutput("samTest","xxxxxx");
// const rootFolder = process.argv[1].endsWith("workflow_scripts\\updateDate.js") ? "..\\" : "..\\..\\";
// for (let index = 2; index < process.argv.length; index++) {
//     var filePath = path.normalize(path.join(__dirname, rootFolder + process.argv[index]))
//     const { mtime } = fs.statSync(filePath)
//     if (path.extname(filePath) == ".md") {
//         fs.readFile(filePath, 'utf8', function (err, data) {
//             if (err) throw err
//             var content = fm(data)
//             if (content.attributes["date"] != mtime.format('yyyy-MM-dd')) {               
//                 data = data.replace(/date:.*/, String.format("date: \"{0}\"",mtime.format('yyyy-MM-dd')));
//                 fs.writeFileSync(filePath, data);
//                 console.log(String.format("Update date for {0}, from {1} to {2}.",filePath,content.attributes["date"],mtime.format('yyyy-MM-dd')));
//             }
//         })
//     }
// }

// Date.prototype.format = function (fmt) {
//     var o = {
//         "M+": this.getMonth() + 1,
//         "d+": this.getDate(),
//         "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12,
//         "H+": this.getHours(),
//         "m+": this.getMinutes(),
//         "s+": this.getSeconds(),
//         "q+": Math.floor((this.getMonth() + 3) / 3),
//         "S": this.getMilliseconds()
//     };
//     var week = {
//         "0": "/u65e5",
//         "1": "/u4e00",
//         "2": "/u4e8c",
//         "3": "/u4e09",
//         "4": "/u56db",
//         "5": "/u4e94",
//         "6": "/u516d"
//     };
//     if (/(y+)/.test(fmt)) {
//         fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
//     }
//     if (/(E+)/.test(fmt)) {
//         fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
//     }
//     for (var k in o) {
//         if (new RegExp("(" + k + ")").test(fmt)) {
//             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
//         }
//     }
//     return fmt;
// }

// String.format = function ()
// {
//     var param = [];
//     for (var i = 0, l = arguments.length; i < l; i++)
//     {
//         param.push(arguments[i]);
//     }
//     var statment = param[0]; // get the first element(the original statement)
//     param.shift(); // remove the first element from array
//     return statment.replace(/\{(\d+)\}/g, function(m, n)
//     {
//         return param[n];
//     });
// }