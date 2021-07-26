const tempHistoryEl = document.getElementById("temp-history");
const displayEl = document.getElementById("display");
const numbers = document.getElementsByClassName("number");
const operations = document.getElementsByClassName("operation");
const square = document.getElementById("square");
const cube = document.getElementById("cube");
const squareRoot = document.getElementById("square-root");
const divide = document.getElementById("divide");
const equalEl = document.getElementById("equal");
const signEl = document.getElementById("sign");
const clearAllEl = document.getElementById("clear-all");
const clearLastEl = document.getElementById("clear-last");
const backspace = document.getElementById("backspace");
const savehistoryEl = document.getElementById("history-info");
const inverse = document.getElementById("inverse");

let result = null;
let hasDecimalPoint = false;
let displayNumber = "";
let tempHistoryVar = "";
let tempOperator = "";
let lastOperation = "";
let savehistory = "";

// display numbers
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", e => {
    if (e.target.innerText === "." && hasDecimalPoint) {
      // if the number has a decimal point we cant add another
      return;
    } else if (e.target.innerText === ".") {
      // a number can only have one decimal point!
      hasDecimalPoint = true;
    }
    displayNumber += e.target.innerText;
    displayEl.innerText = displayNumber;
  });
}

// display operations
for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", e => {
    if (!displayNumber) return;
    hasDecimalPoint = false;
    const operatorName = e.target.innerText;
    if (displayNumber && tempHistoryVar && lastOperation) {
      mathOperation(lastOperation);
    } else {
      result = parseFloat(displayNumber);
    }
    addToTempHistory(operatorName);
    lastOperation = operatorName;
  });
}
divide.addEventListener("click", e => {
  if (!displayNumber) return;
  hasDecimalPoint = false;
  const operatorName = "/";

  if (displayNumber && tempHistoryVar && lastOperation) {
    mathOperation(lastOperation);
  } else {
    result = parseFloat(displayNumber);
  }
  addToTempHistory(operatorName);
  lastOperation = operatorName;
});
square.addEventListener("click", e => {
  if (!displayNumber) return;
  hasDecimalPoint = false;
  // const operatorName = "square";

  let tempResult = "";
  tempResult = Math.pow(parseFloat(displayNumber), 2);

  displayNumber = tempResult;
  displayEl.innerText = tempResult;
  // tempHistoryVar += tempResult;
  tempHistoryEl.innerText = tempHistoryVar;

  if (displayNumber && tempHistoryVar && lastOperation) {
    mathOperation(lastOperation);
  } else {
    result = parseFloat(displayNumber);
  }
  // addToTempHistory(operatorName);
  // lastOperation = operatorName;
});
cube.addEventListener("click", e => {
  if (!displayNumber) return;
  hasDecimalPoint = false;

  let tempResult = "";
  tempResult = Math.pow(parseFloat(displayNumber), 3);

  displayNumber = tempResult;
  displayEl.innerText = tempResult;
  tempHistoryVar += tempResult;
  tempHistoryEl.innerText = tempHistoryVar;

  if (displayNumber && tempHistoryVar && lastOperation) {
    mathOperation(lastOperation);
  } else {
    result = parseFloat(displayNumber);
  }
});
squareRoot.addEventListener("click", e => {
  if (!displayNumber) return;
  hasDecimalPoint = false;

  let tempResult = "";
  tempResult = Math.pow(parseFloat(displayNumber), 1 / 2);

  displayNumber = tempResult;
  displayEl.innerText = tempResult;
  // tempHistoryVar += tempResult;
  tempHistoryEl.innerText = tempHistoryVar;

  if (displayNumber && tempHistoryVar && lastOperation) {
    console.log(displayNumber, tempHistoryVar, lastOperation);

    mathOperation(lastOperation);
  } else {
    result = parseFloat(displayNumber);
  }
});
inverse.addEventListener("click", e => {
  if (!displayNumber) return;
  hasDecimalPoint = false;

  let tempResult = "";
  tempResult = 1 / parseFloat(displayNumber);

  displayNumber = tempResult;
  displayEl.innerText = tempResult;
  // tempHistoryVar += tempResult;
  tempHistoryEl.innerText = tempHistoryVar;

  if (displayNumber && tempHistoryVar && lastOperation) {
    console.log(displayNumber, tempHistoryVar, lastOperation);

    mathOperation(lastOperation);
  } else {
    result = parseFloat(displayNumber);
  }
});

function addToTempHistory(name) {
  // switch (name) {
  //   case "square":
  //   case "cube": {
  //     tempHistoryVar += " " + name + "(" + displayNumber + ")" + " ";
  //     break;
  //   }
  //   default: {
  tempHistoryVar += displayNumber + " " + name + " ";
  // }
  // }

  tempHistoryEl.innerText = tempHistoryVar;
  displayEl.innerText = "";
  displayNumber = "";
  displayEl.innerText = result;
}
function mathOperation(operator) {
  // console.log(operator);
  switch (operator) {
    case "x": {
      result = parseFloat(result) * parseFloat(displayNumber);
      break;
    }
    case "+": {
      result = parseFloat(result) + parseFloat(displayNumber);
      break;
    }
    case "-": {
      result = parseFloat(result) - parseFloat(displayNumber);
      break;
    }
    case "%": {
      result = parseFloat(result) % parseFloat(displayNumber);
      break;
    }
    case "/": {
      result = parseFloat(result) / parseFloat(displayNumber);
      break;
    }
  }
}

equalEl.addEventListener("click", e => {
  if (!displayNumber || !tempHistoryVar) return;
  hasDecimalPoint = false;
  mathOperation(lastOperation);
  addToTempHistory();
  savehistory +=
    "<li><p>" +
    tempHistoryVar.replace("undefined", "") +
    "</p>" +
    "<h3>" +
    result +
    "</h3></li>";
  savehistoryEl.innerHTML = savehistory;
  console.log(tempHistoryVar);
  displayEl.innerText = result;

  tempHistoryEl.innerText = 0;
  tempHistoryVar = "";
  displayNumber = result;
});
signEl.addEventListener("click", e => {
  if (!displayNumber) return;
  displayNumber = displayNumber * -1;
  displayEl.innerText = displayNumber;
});
clearAllEl.addEventListener("click", () => {
  displayEl.innerText = 0;
  tempHistoryEl.innerText = 0;
  displayNumber = "";
  tempHistoryVar = "";
  result = "";
});
clearLastEl.addEventListener("click", () => {
  displayEl.innerText = 0;
  displayNumber = "";
});
backspace.addEventListener("click", () => {
  if (displayEl.innerText.length === 1) {
    displayNumber = "";
    displayEl.innerText = 0;
  } else {
    displayNumber = displayNumber.substring(0, displayNumber.length - 1);
    displayEl.innerText = displayNumber;
  }
});

// keyboad functionality:
window.addEventListener("keydown", e => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickNumber(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "%") {
    clickOperation(e.key);
  } else if (e.key === "*") {
    clickOperation("x");
  } else if (e.key === "/") {
    clickDivide();
  } else if (e.key == "Enter" || e.key === "=") {
    clickEqual();
  } else if (e.key == "Backspace") {
    clickBackspace();
  }
});
function clickNumber(key) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].innerText === key) {
      numbers[i].click();
    }
  }
}
function clickOperation(key) {
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].innerText === key) {
      operations[i].click();
    }
  }
}
function clickEqual() {
  equalEl.click();
}
function clickDivide() {
  divide.click();
}
function clickBackspace() {
  backspace.click();
}
