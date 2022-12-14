

function galleryInit() {

    renderGallery()
}


function renderGallery() {
    var images = getImages()
    var strHtml=''
    images.forEach(img => {
        strHtml += img
    })
    
    document.querySelector('.memes-gallery').innerHTML = strHtml

}

