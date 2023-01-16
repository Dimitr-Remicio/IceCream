var modal = document.getElementById('modal-buy');
var btn_buy = document.getElementById('btn_buy');
var btn_buy_small = document.getElementById('btn_buy-small');
var btn_exit = document.getElementById('btn_exit');

 // for show modal 
btn_buy.onclick = function() {
    modal.style.display = 'block';
    modal.style.position = 'fixed';
}

btn_buy_small.onclick = function () {
    modal.style.display = "block";
    modal.style.position = "fixed";
}

//for exit modal
btn_exit.onclick = function () {
    modal.style.display = 'none';
}