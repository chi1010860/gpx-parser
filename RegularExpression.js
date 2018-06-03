var log = console.log;

text = "name=ccc age=43 email=[ccckmit@gmail.com,ccc@nqu.edu.tw] website=http://ccckmit.wikidot.com/ job=teacher";
log("===text.replace(\d+, <number>)===\n%j\n", text.replace(/\d+/, "<number>"));    // 取代數字為 <number>
log("===text.split(\s+)===\n%j\n", text.split(/\s+/));                              // 用空白字元分割字串
log("===text.match(\d+)===\n%j\n", text.match(/\d+/));                              // 比對取得數字
log("===text.search(\d+)===\n%j\n", text.search(/\d+/));                            // 比對取得數字的位置
log("text.charAt(13)=%s\n", text.charAt(13))
log("===text.replace(/http:\/\/[a-zA-Z0-9\.\/_]+/, <url>)===\n%j\n",                // 取代網址為 <url>
    text.replace(/http:\/\/[a-zA-Z0-9\.\/_]+/, "<url>"));
log("===text.replace(/[a-zA-Z0-9_]+@[a-zA-Z0-9\._]+/, <email>)===\n%j\n",           // 取代郵件位址為 <email>，只取代一次
    text.replace(/[a-zA-Z0-9_]+@[a-zA-Z0-9\._]+/, "<email>"));
log("===text.replace(/[a-zA-Z0-9_]+@[a-zA-Z0-9\._]+/g, <email>)===\n%j\n",          // 取代所有郵件位址為 <email>。
    text.replace(/[a-zA-Z0-9_]+@[a-zA-Z0-9\._]+/g, "<email>"));

var o = {
    "1": "text",
    text: 1
}

log(o.text)