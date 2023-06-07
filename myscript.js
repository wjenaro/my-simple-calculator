/*function appendValue(div){
    var inputValue = document.getElementById("result");
    if (inputValue.value=="" && div.textContent=="*"){
        alert("You cannot start with a '*' sign");

    }
    else if (inputValue.value=="" && div.textContent=="+"){
        alert("You cannot start with a '+' sign");

    }
    else if (inputValue.value=="" && div.textContent=="-"){
        alert("You cannot start with a '-' sign");

    }
    else if (inputValue.value=="" && div.textContent=="/"){
        alert("You cannot start with a '/' sign");

    }
    else{
        inputValue.value += div.textContent;
    }
    
}
cal  after clicking = sign  */


/*code is improved below*

function appendValue(div) {
    var inputValue = document.getElementById("result");
    var operators = ["*", "+", "-", "/"];
  
    if (inputValue.value === "" && operators.includes(div.textContent)) {
      alert("You cannot start with a '" + div.textContent + "' sign");
    } else {
      inputValue.value += div.textContent;
    }
  }
  */

  function appendValue(div) {
    var inputValue = document.getElementById("result");
    var operators = ["*", "+", "-", "/"];
  
    if (inputValue.value === "" && operators.includes(div.textContent)) {
      alert("You cannot start with a '" + div.textContent + "' sign");
    } else if (
      operators.includes(inputValue.value.slice(-1)) &&
      operators.includes(div.textContent)
    ) {
      alert("Operators cannot be placed adjacent to each other");
    } else {
      inputValue.value += div.textContent;
    }
  }
  
function doCalc(div){
    var outputValue=document.getElementById("result");
    outputValue.value=eval(outputValue.value);
}