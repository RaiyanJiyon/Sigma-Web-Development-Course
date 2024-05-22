let button = document.getElementById("btn")
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener('dblclick', function() {
    document.querySelector('.box').innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
});

button.addEventListener('contextmenu', function() {
    alert("Dont hack us by Right click Please");
});

document.addEventListener('keydown', function(e) {
    console.log(e, e.key, e.keyCode);
})