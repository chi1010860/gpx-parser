//fs_test_25.js
var fs = require("fs");
fs.open("./test.txt", "r+", function (err, fd) {     //以讀取+寫入模式開啟
    if (err) return console.log(err);
    console.log("檔案開啟操作完成!");
    console.log("檔案描述子 : " + fd);
    var buf = new Buffer("Hello\r\nTony");
    fs.write(fd, buf, 0, buf.length, 0, function (err, bytesWritten, buffer) {
        if (err) return console.log(err);
        console.log("檔案寫入操作完成!");
        console.log("寫入 Bytes 數 : " + bytesWritten);
        console.log("寫入內容 : " + buffer);
    });
    console.log("檔案寫入操作中 ... ");
});
console.log("檔案開啟操作中 ... ");