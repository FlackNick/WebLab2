let boxes = [];

const findAllBoxes = () => {
    boxes = document.querySelectorAll('.box');
}

const set_color = () => {
    for (let i = 4; i <= 21; i = i+3) {
        boxes[i].classList.add('grey_box');
    }
}

findAllBoxes();
set_color();
