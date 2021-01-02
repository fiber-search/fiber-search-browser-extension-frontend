const BACKEND = 'http://localhost:48534';

var req = new XMLHttpRequest();
req.open('GET', `${BACKEND}/?type=record&url=${window.location.href}`);
req.send();

window.addEventListener("load", () => {
    var req = new XMLHttpRequest();
    req.open('GET', `${BACKEND}/?type=record-no-increasing&url=${window.location.href}&title=${document.title}`);
    req.send();
})
