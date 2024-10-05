let inp = document.getElementById('inp')
let btn = document.getElementById('btn')
let boxs = document.querySelectorAll('.box')
let drag = null;

btn.onclick = function () {
    if (inp.value != '') {
        boxs[0].innerHTML +=`
        <p class='item' draggable='true'>${inp.value}</p>
        `
        inp.value = ''
    }
    dragItem()
}

function dragItem() {
    let items = document.querySelectorAll('.item')
    items.forEach(item => {
        item.addEventListener('dragstart', function () {
            item.style.opacity='.5'
        drag = item
        })
    });

    items.forEach(item => {
        item.addEventListener('dragend', function () {
            item.style.opacity='1'
            drag = item
        })
    });
    boxs.forEach(box => {
        box.addEventListener('dragover', function (e) {
            e.preventDefault()
            this.style.backgroundColor='green'
            this.style.color = '#fff'
        })

        box.addEventListener('dragleave', function () {
            this.style.backgroundColor='lightseagreen'
            this.style.color='#000'
        })
        box.addEventListener('drop', function () {
            box.append(drag);
            this.style.backgroundColor='lightseagreen'
            this.style.color='#000'
            
        })
    });
}



