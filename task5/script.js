let duplikate = document.querySelector('#duplicateField');
let inputText = document.querySelector('input');


document.querySelector('input').addEventListener('keypress', (event) => {
//    let duplikate = document.querySelector('#duplicateField');
    duplikate.textContent = duplikate.textContent + String.fromCharCode(event.charCode);
});

document.querySelector('button').addEventListener('mousedown', (event) => {
    if (event.which === 1){
        event.preventDefault();
//Вынес объявления переменных за функцию        
//        let inputText = document.querySelector('input');
//        let duplikate = document.querySelector('#duplicateField');
        console.log(inputText.value);
        duplikate.textContent = '';
        inputText.value = '';
    }
});