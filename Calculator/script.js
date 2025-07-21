let string = "";
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".input");

Array.from(buttons).forEach((btn) => {
   btn.addEventListener('click', (e)=>{
     if(btn.innerHTML == '='){
        string = eval(string);
        display.value = string;
     }
     else if(e.target.innerHTML == 'AC'){
        string = "";
        display.value = string;
     }
     else if(e.target.innerHTML == 'DEL'){
        display.value = display.value.substr(0, display.value.length-1);
        string = display.value;
     }
     else{
      string = string + e.target.innerHTML;
      display.value = string;
     }
   });
});




 
