

var gCtx
var imgId
var memeImg
var gMeme = {}

function initEditor(imgId,memeImg) {
    changeSection()
    gXPosition = 200
    gYPosition = 100
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

function renderEmojis(){
    var images = getEmojis()
    var strHtml = ''
    images.forEach(emoj => {
        strHtml += ` <img src="${img.url}" class="image" onclick= "initEditor(${img.id},this)">`
    })

    document.querySelector('.memes-gallery').innerHTML = strHtml
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







