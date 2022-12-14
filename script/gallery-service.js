

var gImgs

function getImages() {
    gImgs = []
    for (var i = 1; i < 19; i++) {
        var img = ` <img src="images/${i}.jpg" class="image"  onclick = "renderEditor()">`
        gImgs.push(img)
    }

    return gImgs
}