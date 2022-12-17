

function galleryInit() {

    
    renderGallery()
}


function renderGallery() {
    var images = getImagesList()
    var strHtml = ''
    images.forEach(img => {
        strHtml += ` <img src="${img.url}" class="image" onclick= "initEditor(${img.id},this)">`
    })

    document.querySelector('.memes-gallery').innerHTML = strHtml
}

function onFiltering(){
    var images = getImagesList()
    var value = document.querySelector('.filter-text').value
    var filterList =images.find(i => i.keywords[0] === value)
    return filterList
}