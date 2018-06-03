var text = '<key-text>' +
    '<1 original="Output"></>' +
    '</key-text>'

var text2 = "<bookstore><book>" +
    "<title>Everyday Italian</title>" +
    "<author>Giada De Laurentiis</author>" +
    "<year>2005</year>" +
    "</book></bookstore>"

var parser, xmlDoc

parser = new DOMParser()
xmlDoc = parser.parseFromString(text, "text/xml")

console.log(xmlDoc)
console.log(xmlDoc.nodeType)

document.getElementById("demo").innerHTML =
    xmlDoc.getElementsByTagName("key-text")[0].childNodes[0].nodeValues