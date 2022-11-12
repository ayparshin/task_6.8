document.querySelector('a').addEventListener('click', 
  (event) => {
    event.preventDefault();
    let link = document.querySelector('a');
    let answear = prompt('Чем заменить текст ссылки?');
    if (answear != ''){
      link.textContent = answear;
    };
});