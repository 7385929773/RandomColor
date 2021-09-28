function changeTheRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}
function changeBackgroundColor(){
    var bcolor = document.getElementById('color-cover');
    bcolor.style.backgroundColor= changeTheRandomColor();
}
function changeText(){
    let textm=document.getElementById('text-p');
    if(textm.innerHTML=='LIFE IS BEAUTIFUL')
    textm.innerHTML='MY LIFELINE IS MANGESH';
    else if(textm.innerHTML=='MY LIFELINE IS MANGESH')
    textm.innerHTML='I LOVE YOU AHO';
    else if(textm.innerHTML=='I LOVE YOU AHO')
    textm.innerHTML='PRIYA LOVES MANGESHA';
    else if(textm.innerHTML=='PRIYA LOVES MANGESHA')
    textm.innerHTML='LIFE IS BEAUTIFUL';
}
function checkBg(){
    changeTheRandomColor();
    changeBackgroundColor();
    changeText();
}
setInterval(checkBg,2000);