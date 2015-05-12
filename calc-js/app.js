function add(num1, num2){
  total = num1 + num2;
  return total;
}

function subtract(num1, num2){
  total = num1 - num2;
  return total;
}

function multiply(num1, num2){
  total = num1 * num2;
  return total;
}

function divide(num1, num2){
  total = num1 / num2;
  return total;
}

numsArr = [];
function myFunction(el){
  num = parseInt(el.innerHTML);
  numsArr.push(num);
  return numsArr;
}

function dispatchOperation(el){
  operation = el.innerHTML;
}

function dispatchEquals(){
 if (operation == " + "){
    // console.log(add(numsArr[0], numsArr[1]));
    $('#output').html(add(numsArr[0], numsArr[1]));
  }
  else if(operation == " - "){
    // console.log(subtract(numsArr[0], numsArr[1]));
    $('#output').html(subtract(numsArr[0], numsArr[1]));
  }
  else if(operation == " * "){
    // console.log(multiply(numsArr[1], numsArr[2]));
    $('#output').html(multiply(numsArr[0], numsArr[1]));
  }
  else if(operation == " / "){
    console.log(divide(numsArr[0], numsArr[1]))
    $('#output').html(divide(numsArr[0], numsArr[1]));
  }
}

function dispatchClear(){
  numsArr = [];
  console.log(numsArr);
}