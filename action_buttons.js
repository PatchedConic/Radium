const PREFIX = 'ACTIVITY BUTTONS: '

function code_focus() {
    var element = document.getElementsByClassName("ribbon");
    for(i=0; i< element.length; i++){
        element[i].style.display = 'none';
        console.log(element[i].id)
    }
    element = document.getElementById("code_ribbon");
    element.style.display="flex";
}

function text_focus() {
    var element = document.getElementsByClassName("ribbon");
    for(i=0; i< element.length; i++){
        element[i].style.display = 'none';
        console.log(element[i].id)
    }
    element = document.getElementById("text_ribbon");
    element.style.display="flex";
}

function math_focus() {
    var element = document.getElementsByClassName("ribbon");
    for(i=0; i< element.length; i++){
        element[i].style.display = 'none';
        console.log(element[i].id)
    }
    element = document.getElementById("math_ribbon");
    element.style.display="flex";
}

function graph_focus() {
    var element = document.getElementsByClassName("ribbon");
    for(i=0; i< element.length; i++){
        element[i].style.display = 'none';
        console.log(element[i].id)
    }
    element = document.getElementById("graph_ribbon");
    element.style.display="flex";
}

function toggleFileDropdown(){
    var element = document.getElementById('file_dropdown');
    element.style.display = (element.style.display === 'block') ? 'none' : 'block'
}

function toggleEditDropdown(){
    var element = document.getElementById('edit_dropdown');
    element.style.display = (element.style.display === 'block') ? 'none' : 'block'
}

function toggleInsertDropdown(){
    var element = document.getElementById('insert_dropdown');
    element.style.display = (element.style.display === 'block') ? 'none' : 'block'
}

function toggleHelpDropdown(){
    var element = document.getElementById('help_dropdown');
    element.style.display = (element.style.display === 'block') ? 'none' : 'block'
}

window.onclick = function(event) {
    var element = document.getElementsByClassName('title_bar_dropdown');
    var button = document.getElementsByClassName('title_bar_button')
    for (i=0 ;i < element.length; i++){
        if (event.target !== element[i] && event.target!== button[i]){
            element[i].style.display = 'none';
        }
    }
    console.log("Triggered")
}