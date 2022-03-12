
function scissors () {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://127.0.0.1:5000/query-example?language=Python');
    xhr.send();
}

function rock () {
    alert("rock")
}

function paper () {
    alert("paper")
}

document.getElementById("rock").onclick = function() { rock() };
document.getElementById("paper").onclick = function() { paper() };
document.getElementById("scissors").onclick = function() { scissors() };