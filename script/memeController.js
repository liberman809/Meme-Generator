

var gCtx

var gMeme = {}

function initEditor(imgId,memeImg) {
    changeSection()
    gXPosition = 200
    gYPosition = 100
    gFontSize = 30
    Align = 'start'
    gTextStroke = false
    gFont = 'Ariel'
    gMeme = createMeme(imgId,memeImg)
    gCurrLineEdit = 0
    setFont()
    renderMeme()

}

function changeSection() {

    document.querySelector('.gallery').classList.add("display-none")
    document.querySelector('.editor').classList.remove("display-none")

}

function renderMeme() {
    var meme =  gMeme.url
    var canvas = document.getElementById("myCanvas")
    gCtx = canvas.getContext("2d")
    gCtx.drawImage(meme, 0, 0, 400, 400)
    renderLines()
}

function onEditText(){
    editText()
    renderMeme()
}

function onChangefontSize(operator) {
    setFontSize(operator)
    renderMeme()
}

function onSetAlign(direction) {
    setAlign(direction)
    renderMeme()
}

function onSetStroke(){
    setStroke()
    renderMeme()
}
function onSetColor(){
    setColor()
    renderMeme()
}

function onSetFont(){
    setFont()
    renderMeme()
}

function onAddLine(){
    addLine()
    renderMeme()
}

function onChangeLine(operator){
    changeLine(operator)
    renderMeme()
}

function onDeliteLine(){
    deliteLine()
    renderMeme()
}







