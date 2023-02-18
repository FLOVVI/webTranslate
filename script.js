async function sendData() {
    let text = document.querySelector("#text").value;
    let from_language = document.querySelector("#from_language").value;
    let on_language = document.querySelector("#on_language").value;
    let res = await eel.main(text, from_language, on_language)();
    document.getElementById("translate").value = res;
};

var text = document.getElementById('text');
var from_language = document.getElementById('from_language');
var on_language = document.getElementById('on_language');


text.oninput = function() {
    sendData();
};

from_language.oninput = function() {
    sendData();
};

on_language.oninput = function() {
    sendData();
};