const fs = require('fs')
const filePath = 'static/ControlLink.gxml'
var gpx = {}

// main
fs.readFile(filePath, function (err, data) {
    if (err) throw err
    var gxml = data.toString()  // get the raw data

    // get the object of data
    gpx.languageTable = getLanguageTable(gxml)
    gpx.keyText = getKeyText(gxml)
    gpx.button = getButton(gxml)

    // debug
    console.log(gpx)
})

// module.exports
module.exports = gpx;

// get the content of each tag
function getLanguageTable(_gxml) {
    var _languageTable = []
    var targetTag = _gxml.match(/<language-table[\s\S]*?(<\/>){2}/)[0]
    var list = targetTag.match(/<\d+>.*/g)
    for (let i = 0; i < list.length; i++) {
        let item = list[i].match(/>.*?</)[0]
        item = item.slice(1, item.length - 1)
        _languageTable.push(item)
    }
    return _languageTable
}

function getKeyText(_gxml) {
    var _keyText = []
    var targetTag = _gxml.match(/<key-text>[\s\S]*?(<\/>){2}/)[0]
    var list = targetTag.match(/<\d+ \w+=".*"]*><\/>/g)
    for (let i = 0; i < list.length; i++) {
        var _original = list[i].match(/original=".*?"/g)[0]
        var _zhTw = list[i].match(/zh-tw=".*?"/g) ? list[i].match(/zh-tw=".*?"/g)[0] : list[i].match(/original=".*?"/g)[0]
        _keyText[i] = {
            id: list[i].match(/\d+/g)[0],
            original: _original.slice(10, _original.lastIndexOf('"')),
            zhTw: _zhTw.slice(7, _zhTw.lastIndexOf('"'))
        }
    }
    return _keyText
}

function getPageFrame(_gxml) {
    var _pageFrame = []
    return _pageFrame
}

function getButton(_gxml) {
    // Defination of button object
    var _button = []

    var targetTag = _gxml.match(/<gpx:object page-title="Button"[\s\S]*?<font original="1">(<\/>){5}\s/g)[0]
    var buttonTag = targetTag.match(/<gpx:object.*"_Button"[\s\S]*?(<\/>){6}/g)
    var msgTag = targetTag.match(/<gpx:object.*"MSG"[\s\S]*?(<\/>){4}/g)
    for (i = 0; i < buttonTag.length; i++) {
        // Defination of item in this scope
        var item = {
            rect: [],
            penColor: "",
            brushColor: "",
            showWindow: "",
            tagname: "",
            text: "",
            textColor: "",
            textAlign: 0,
            drawingOP: "",
            textFormat: "",
            messageIndex: "",
            style: ""
        }

        // get rect
        rectTag = buttonTag[i].match(/rect=".*?"/g)[0]
        var _rect = rectTag.match(/[0-9]+/g)
        for (var key in _rect) {
            _rect[key] = parseInt(_rect[key])
        }
        item.rect = _rect

        // get penColor
        var penColorTag = buttonTag[i].match(/pen-color=".*?"/g)[0]
        penColorTag = penColorTag.match(/"\w+"/)[0]
        item.penColor = '#' + penColorTag.match(/\w+/)[0]

        // get brushColor
        var brushColorTag = buttonTag[i].match(/brush-color=".*?"/g)[0]
        brushColorTag = brushColorTag.match(/"\w+"/)[0]
        item.brushColor = '#' + brushColorTag.match(/\w+/)[0]

        // get showWindow
        var showWindowTag = buttonTag[i].match(/"show_window"[\s\S]*?<\/><\/>/)[0]
        showWindowTag = showWindowTag.match(/>\w+</)[0]
        showWindowTag = showWindowTag.match(/\w+/)[0]
        item.showWindow = showWindowTag

        // get mseeage
        var tagnameTag = msgTag[i].match(/tagname0=".*?"/)[0]
        tagnameTag = tagnameTag.match(/".*"/)[0]
        tagnameTag = tagnameTag.match(/\w+/)[0]
        item.tagname = tagnameTag

        // get text
        var textTag = msgTag[i].match(/text=".*?"/)[0]
        textTag = textTag.match(/".*"/)[0]
        textTag = textTag.match(/\w+/)[0]
        item.text = textTag

        // get textColor
        var textColorTag = msgTag[i].match(/text-color=".*?"/)[0]
        textColorTag = textColorTag.match(/".*"/)[0]
        textColorTag = '#' + textColorTag.match(/\w+/)[0]
        item.textColor = textColorTag

        // get textAlign
        var textAlignTag = msgTag[i].match(/text-align=".*?"/)[0]
        textAlignTag = textAlignTag.match(/".*"/)[0]
        textAlignTag = textAlignTag.match(/\w+/)[0]
        item.textAlign = textAlignTag

        // get drawingOP
        var drawingOPTag = msgTag[i].match(/drawing-OP=".*?"/)[0]
        drawingOPTag = drawingOPTag.match(/".*"/)[0]
        drawingOPTag = drawingOPTag.match(/\w+/)[0]
        item.drawingOP = drawingOPTag

        // get textFormat
        var textFormatTag = msgTag[i].match(/text-format=".*?"/)[0]
        textFormatTag = textFormatTag.match(/".*"/)[0]
        textFormatTag = textFormatTag.match(/\w+/)[0]
        item.textFormat = textFormatTag

        // get messageIndex
        var messageIndexTag = msgTag[i].match(/"MessageIndex"[\s\S]*?<\/><\/>/)[0]
        messageIndexTag = messageIndexTag.match(/message=".*"/)[0]
        messageIndexTag = messageIndexTag.match(/".*"/)[0]
        messageIndexTag = messageIndexTag.match(/\w+/)[0]
        item.messageIndex = messageIndexTag

        // push to button property
        _button.push(item)
        // console.log(item)
    }
    return _button
}