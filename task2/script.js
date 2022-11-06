const consolelog = document.querySelector('#consoleLog');

consolelog.addEventListener('click', () => {
    alert('Метод для вывода сообщения в консоль.');
});

const someAlert = document.querySelector('#alert');

someAlert.addEventListener('click', () => {
    alert('Метод для вывода сообщения во всплывающем попапе, который блокирует работу с сайтом, пока не нажмешь Ok.');
});

const somePromt = document.querySelector('#prompt');

somePromt.addEventListener('click', () => {
    alert('Метод для вывода сообщения во всплывающем попапе, который предлагает ввести какой-либо текст.');
});
