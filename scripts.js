function sendForm(e){
     
    // получаем значение поля key
    var keyBox = document.search.key;
    var val = keyBox.value;
    if(val.length>5){
        alert("Недопустимая длина строки");
        document.search.action="PostForm";
    }   
    else
        alert("Отправка разрешена");
}
document.search.action="PostForm";
function sendForm(e){
     
    // получаем значение поля key
    var keyBox = document.search.key;
    var val = keyBox.value;
    if(val.length>5){
        alert("Недопустимая длина строки");
        document.search.reset();
        e.preventDefault();
    }   
    else
        alert("Отправка разрешена");
}