
function scissors () {
    alert("scissors")
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