const cpp = document.getElementById("cpp");
const python = document.getElementById("python");
const javascript = document.getElementById("javascript");


function Click(){
    if (box3.checked){
        text.textContent = "Your favorite programming language is C++";
    }
    else if (box1.checked){
        text.textContent = "Your favorite programming Language is Python "
    }
    else if (javascript.checked){
        text.textContent = "Your favorite programming Language is Javascript "
    }
}