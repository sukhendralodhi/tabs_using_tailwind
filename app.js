
let btns = document.getElementsByClassName('btnLink');

const openTextBox = (eve, textBoxVal) => {
    // let i, tabContent, tabLinks;

    let boxes = document.getElementsByClassName('box');

    for (i = 0; i < boxes.length; i++) {
        boxes[i].style.display = 'none';        
    }

    console.log('Hello');
    document.getElementById(textBoxVal).style.display = 'block';
};





