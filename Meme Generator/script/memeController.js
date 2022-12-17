

var gCtx
var imgId
var memeImg
var gMeme = {}
var gCanvas
var selectedLine

function initEditor(imgId, memeImg) {
    changeSection()
    gMeme = createMeme(imgId, memeImg)
    setOlaceOlder()
    setFont()
    renderEmojis()
    renderMeme()
}


function changeSection() {

    document.querySelector('.gallery').classList.add("display-none")
    document.querySelector('.editor').style.display = "flex"

}

function setOlaceOlder(){
    document.querySelector('.meme-text').placeholder= gMeme.lines[gMeme.selectedLineIdx].txt
}

function renderMeme() {
    var meme =  gMeme.url
    gCanvas = document.getElementById("myCanvas")
    gCtx = gCanvas.getContext("2d")
    gCtx.drawImage(meme, 0, 0, 400, 400)
    renderLines()
}


function renderEmojis(){
    var imj = getEmojiList()
    var strHtml = ''
    imj.forEach(emoj => {
        strHtml += `<div class= "imj" onclick="onAddImj(${emoj.id})">${emoj.emj}</div>`
    })

    document.querySelector('.stickers-menu').innerHTML = strHtml
}

function onAddImj(emoj){
    addEmoj(emoj)
    renderMeme()
}

function onEditText() {
    editText()
    renderMeme()
}



function onChangefontSize(operator) {
    setFontSize(operator)
    setNewPosition('y',operator)
    renderMeme()
}

function onSetNewPosition(axsis,operator){
    setNewPosition(axsis,operator)
    renderMeme()
}


function onSetAlign(direction) {
    setAlign(direction)
    renderMeme()
    console.log(gMeme.lines[gMeme.selectedLineIdx].align)
}

function onSetStroke() {
    setStroke()
    renderMeme()
}
function onSetColor() {
    setColor()
    renderMeme()
}

function onSetFont() {
    setFont()
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onChangeLine(operator) {
    changeLine(operator)
    renderMeme()
}

function onDeliteLine() {
    deliteLine()
    renderMeme()
}







