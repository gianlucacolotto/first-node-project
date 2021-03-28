console.log('frontend code running');
console.log('href ', window.location.href);
console.log('hostname', window.location.hostname);
var title = document.getElementById('title');
var button = document.getElementById('button');
if (button) {
    button.onclick = function () {
        if (title) {
            title.innerText = 'Testo cambiato da typescript';
        }
    };
}
