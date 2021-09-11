

const btn_extent = document.querySelector('.nav-extent') 
const exten_lv2 = document.querySelector('.nav-extent-lv2')


function removeExtent () {
    exten_lv2.classList.remove('active')
}

function showExtent () {
    exten_lv2.classList.add('active')     
}

// btn_extent.addEventListener('click', showExtent)
// exten_lv2.addEventListener('click', removeExtent)

btn_extent.addEventListener('click', function () {
    if(btn_extent.classList.toggle('123') == true) {
        showExtent()
    }
    else {
        removeExtent()
    }
})