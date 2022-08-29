let display = document.getElementById("displayText");

let calculate = (number) =>{
    display.value += number;
}

let Result = () => {
    try{
        display.value = eval(display.value);
    }
    catch (err){
        alert("Enter valid number");
    }
}

function ac(){
    display.value = "";
}

function del(){
    display.value = display.value.slice(0,-1);
}