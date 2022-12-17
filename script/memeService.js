

function getImagesList() {
    const imges = [
        { id: 1, url: 'images/1.jpg', keywords: ['Trump', 'politics'] },
        { id: 2, url: 'images/2.jpg', keywords: ['funny', 'dog'] },
        { id: 3, url: 'images/3.jpg', keywords: ['baby', 'dog'] },
        { id: 4, url: 'images/4.jpg', keywords: ['funny', 'cat'] },
        { id: 5, url: 'images/5.jpg', keywords: ['baby', 'strong'] },
        { id: 6, url: 'images/6.jpg', keywords: ['funny', 'cat'] },
        { id: 7, url: 'images/7.jpg', keywords: ['funny', 'baby'] },
        { id: 8, url: 'images/8.jpg', keywords: ['funny', 'cat'] },
        { id: 9, url: 'images/9.jpg', keywords: ['funny', 'cat'] },
        { id: 10, url: 'images/10.jpg', keywords: ['funny', 'Obama'] },
        { id: 11, url: 'images/11.jpg', keywords: ['', 'cat'] },
        { id: 12, url: 'images/12.jpg', keywords: ['funny', 'cat'] },
        { id: 13, url: 'images/13.jpg', keywords: ['funny', 'cat'] },
        { id: 14, url: 'images/14.jpg', keywords: ['funny', 'cat'] },
        { id: 15, url: 'images/15.jpg', keywords: ['funny', 'cat'] },
        { id: 16, url: 'images/16.jpg', keywords: ['funny', 'cat'] },
        { id: 17, url: 'images/17.jpg', keywords: ['funny', 'cat'] },
        { id: 18, url: 'images/18.jpg', keywords: ['funny', 'cat'] }
    ]

    return imges
}

function getEmojiList() {
    const emojis = [
        { id: 1, emj: "😎" },
        { id: 2, emj: "😴" },
        { id: 3, emj: "🤩" },
        { id: 4, emj: "😍" },
        { id: 5, emj: "😆" },
        { id: 5, emj: "😀" },
    ]
    return emojis
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

    if (direction === 'end') {
        gMeme.lines[gMeme.selectedLineIdx].xPosition = 250
    }

    if (direction === 'center') {
        gMeme.lines[gMeme.selectedLineIdx].xPosition = 200
    }

    if (direction === 'start') {
        gMeme.lines[gMeme.selectedLineIdx].xPosition = 100
    }

}

function setNewPosition(axis, operator) {

    if (operator === '+') {
        if (axis === 'x') {
            gMeme.lines[gMeme.selectedLineIdx].xPosition++
        } else {
            gMeme.lines[gMeme.selectedLineIdx].yPosition++

        }

    } else {
        if (axis === 'x') {
            gMeme.lines[gMeme.selectedLineIdx].xPosition--
        } else {
            gMeme.lines[gMeme.selectedLineIdx].yPosition--

        }

    }
}

function setStroke() {

    gMeme.lines[gMeme.selectedLineIdx].isSroke = !gMeme.lines[gMeme.selectedLineIdx].isSroke

}

function renderLines() {

    gMeme.lines.forEach(line => {

        gCtx.font = line.size + `px ${line.font}`

        if (line.isSelected) {
            gCtx.fillStyle = "rgba(119, 176, 226, 0.39)"
            gCtx.fillRect(0, line.yPosition - gMeme.lines[gMeme.selectedLineIdx].size, 400, gMeme.lines[gMeme.selectedLineIdx].size + 20)
        }
        gCtx.fillStyle = line.color

        gCtx.textAlign = line.align

        if (line.isSroke === true) {
            gCtx.strokeText(line.txt, line.xPosition, line.yPosition);
        } else {
            gCtx.fillText(line.txt, line.xPosition, line.yPosition)
        }
    })
}

function changeLine(operator) {

    if (operator === '+') {
        gMeme.selectedLineIdx++

        if (gMeme.selectedLineIdx  < gMeme.lines.length) {

            gMeme.lines[gMeme.selectedLineIdx].isSelected = true
            gMeme.lines[gMeme.selectedLineIdx - 1].isSelected = false
        }else{
            gMeme.selectedLineIdx--
            console.log('not a line')
        }


    } else {
        if (gMeme.selectedLineIdx > 0) {
            gMeme.selectedLineIdx--
            gMeme.lines[gMeme.selectedLineIdx].isSelected = true
            gMeme.lines[gMeme.selectedLineIdx + 1].isSelected = false
        } else {
            console.log('not line')
        }

    }

}

function editText() {
    var elText = document.querySelector('.meme-text').value
    gMeme.lines[gMeme.selectedLineIdx].txt =elText
}

function setColor() {
    var elColor = document.querySelector('.color-picer').value
    gMeme.lines[gMeme.selectedLineIdx]["color"] = elColor

}
function deliteLine() {
    if(gMeme.lines.length > 1){
        gMeme.lines.splice(gMeme.selectedLineIdx, 1)
        gMeme.selectedLineIdx--
        gMeme.lines[gMeme.selectedLineIdx].isSelected = true
    }
    

}


function addEmoj(id) {

    var emj = getEmojiList().find(i => i.id === id).emj
    
    gMeme.lines[gMeme.selectedLineIdx].txt = emj
}


function addLine() {

    var line = {
        txt: 'Edit me',
        size: 30,
        align: 'start',
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

function downloadCanvas(elLink) {
    var canvas = document.getElementById("myCanvas")
    const imgContent = canvas.toDataURL() // image/jpeg the default format
    elLink.href = imgContent

}

function createMeme(imgId, memeImg) {
    const meme = {
        selectedImgId: imgId,
        url: memeImg,
        selectedLineIdx: 0,
        lines: [
            {
                type: 'txt',
                txt: 'Edit',
                size: 30,
                align: 'start',
                color: 'black',
                font: 'Impact',
                isSroke: false,
                xPosition: 100,
                yPosition: 100,
                isSelected: true

            }
        ]
    }
    return meme
}