
var gImgs = []
var gEmojis
var gCurrLineEdit


function getImages() {

    const img1 = { id: 1, url: 'images/1.jpg', keywords: ['Trump', 'politics'] }
    const img2 = { id: 2, url: 'images/2.jpg', keywords: ['funny', 'dog'] }
    const img3 = { id: 3, url: 'images/3.jpg', keywords: ['baby', 'dog'] }
    const img4 = { id: 4, url: 'images/4.jpg', keywords: ['funny', 'cat'] }
    const img5 = { id: 5, url: 'images/5.jpg', keywords: ['baby', 'strong'] }
    const img6 = { id: 6, url: 'images/6.jpg', keywords: ['funny', 'cat'] }
    const img7 = { id: 7, url: 'images/7.jpg', keywords: ['funny', 'baby'] }
    const img8 = { id: 8, url: 'images/8.jpg', keywords: ['funny', 'cat'] }
    const img9 = { id: 9, url: 'images/9.jpg', keywords: ['funny', 'cat'] }
    const img10 = { id: 10, url: 'images/10.jpg', keywords: ['funny', 'Obama'] }
    const img11 = { id: 11, url: 'images/11.jpg', keywords: ['', 'cat'] }
    const img12 = { id: 12, url: 'images/12.jpg', keywords: ['funny', 'cat'] }
    const img13 = { id: 13, url: 'images/13.jpg', keywords: ['funny', 'cat'] }
    const img14 = { id: 14, url: 'images/14.jpg', keywords: ['funny', 'cat'] }
    const img15 = { id: 15, url: 'images/15.jpg', keywords: ['funny', 'cat'] }
    const img16 = { id: 16, url: 'images/16.jpg', keywords: ['funny', 'cat'] }
    const img17 = { id: 17, url: 'images/17.jpg', keywords: ['funny', 'cat'] }
    const img18 = { id: 18, url: 'images/18.jpg', keywords: ['funny', 'cat'] }

    gImgs = []
    gImgs.push(img1)
    gImgs.push(img2)
    gImgs.push(img3)
    gImgs.push(img4)
    gImgs.push(img5)
    gImgs.push(img6)
    gImgs.push(img7)
    gImgs.push(img8)
    gImgs.push(img9)
    gImgs.push(img10)
    gImgs.push(img11)
    gImgs.push(img12)
    gImgs.push(img13)
    gImgs.push(img14)
    gImgs.push(img15)
    gImgs.push(img16)
    gImgs.push(img17)
    gImgs.push(img18)

    return gImgs
}

function setFont() {
    var elFonst = document.querySelector(".fonts").value
    gMeme.lines[gMeme.selectedLineIdx].font = elFonst
}

function setFontSize(operator) {
    if (operator === "+") {
        gMeme.lines[gMeme.selectedLineIdx].size += 1
    } else {
        gMeme.lines[gMeme.selectedLineIdx].size -= 1
    }

}

function setAlign(direction) {
    gMeme.lines[gMeme.selectedLineIdx].align = direction
}

function setStroke() {

    gMeme.lines[gMeme.selectedLineIdx].isSroke = !gMeme.lines[gMeme.selectedLineIdx].isSroke

}



function renderLines() {

    gMeme.lines.forEach(line => {

        gCtx.font = line.size + `px ${line.font}`
        gCtx.textAlign = line.align


        if (line.isSelected) {
            gCtx.fillStyle = "rgba(119, 176, 226, 0.39)"
            gCtx.fillRect(0, line.yPosition - 35, 400, 50)
        }
        gCtx.fillStyle = line.color

        if (line.isSroke === true) {
            gCtx.strokeText(line.txt, line.xPosition, line.yPosition);
        } else {
            gCtx.fillText(line.txt, line.xPosition, line.yPosition)
        }



    })

}

function changeLine(operator){
    if(operator === '+'){
        gMeme.selectedLineIdx ++
        gMeme.lines[gMeme.selectedLineIdx].isSelected = true
        gMeme.lines[gMeme.selectedLineIdx-1].isSelected = false

    }else{
        gMeme.selectedLineIdx --
        gMeme.lines[gMeme.selectedLineIdx].isSelected = true
        gMeme.lines[gMeme.selectedLineIdx+1].isSelected = false

    }
    
}

function editText() {
    var elText = document.querySelector('.meme-text')
    gMeme.lines[gMeme.selectedLineIdx].txt = elText.value
}

function setColor() {
    var elColor = document.querySelector('.color-picer').value
    gMeme.lines[gMeme.selectedLineIdx]["color"] = elColor
    
}
function deliteLine(){
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx --
    gMeme.lines[gMeme.selectedLineIdx].isSelected = true

}

function addLine() {

    var line = {
        txt: 'Edit me',
        size: 30,
        align: 'left',
        color: 'black',
        font: 'Impact',
        isStroke: false,
        xPosition: 100,
        yPosition: 300,
        isSelected: true
    }
    gMeme.lines.push(line)
    changeLine('+')

}

function createMeme(imgId, memeImg) {
    var gMeme = {
        selectedImgId: imgId,
        url: memeImg,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Edit',
                size: 30,
                align: 'left',
                color: 'black',
                font: 'Impact',
                isSroke: false,
                xPosition: 100,
                yPosition: 100,
                isSelected: true

            }
        ]
    }
    return gMeme
}
