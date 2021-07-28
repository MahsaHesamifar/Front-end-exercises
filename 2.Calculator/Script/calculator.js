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
const trash = document.getElementById("trash-icon");
// const lastResults = document.getElementsByClassName("last-result");

// const lastResults = document.querySelectorAll(".history-info li");

let result = null;
let hasDecimalPoint = false;
let displayNumber = "";
let tempHistoryVar = "";
let tempOperator = "";
let lastOperation = "";
// let savehistory = "";
let savehistory = [];

let tempSymbol = "";

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

    if (tempSymbol !== "") {
      tempHistoryVar = tempHistoryVar.replace(tempSymbol, "");
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
  if (tempSymbol !== "") {
    tempHistoryVar = tempHistoryVar.replace(tempSymbol, "");
  }
  addToTempHistory(operatorName);
  lastOperation = operatorName;
});
square.addEventListener("click", e => {
  if (!displayNumber) return;
  hasDecimalPoint = false;
  const operatorName = "sqr";

  let tempResult = "";
  tempResult = Math.pow(parseFloat(displayNumber), 2);
  if (tempSymbol !== "") {
    tempHistoryVar = tempHistoryVar.replace(tempSymbol, "");
  }
  addToTempHistory(operatorName);

  displayNumber = tempResult;
  displayEl.innerText = tempResult;
  result = parseFloat(tempResult);

  // tempHistoryVar += tempResult;
  // tempHistoryEl.innerText = tempHistoryVar;

  if (displayNumber && tempHistoryVar && lastOperation) {
    mathOperation(lastOperation);
    result = parseFloat(tempResult);

    // console.log(tempResult, result);
  } else {
    result = parseFloat(displayNumber);
  }
  lastOperation = operatorName;
});
cube.addEventListener("click", e => {
  if (!displayNumber) return;
  hasDecimalPoint = false;
  const operatorName = "cube";

  let tempResult = "";
  tempResult = Math.pow(parseFloat(displayNumber), 3);
  if (tempSymbol !== "") {
    tempHistoryVar = tempHistoryVar.replace(tempSymbol, "");
  }
  addToTempHistory(operatorName);

  displayNumber = tempResult;
  displayEl.innerText = tempResult;
  result = tempResult;

  if (displayNumber && tempHistoryVar && lastOperation) {
    mathOperation(lastOperation);
  } else {
    result = parseFloat(displayNumber);
  }
  lastOperation = operatorName;
});
squareRoot.addEventListener("click", e => {
  if (!displayNumber) return;
  hasDecimalPoint = false;
  const operatorName = "sqr-root";

  let tempResult = "";
  tempResult = Math.pow(parseFloat(displayNumber), 1 / 2);
  if (tempSymbol !== "") {
    tempHistoryVar = tempHistoryVar.replace(tempSymbol, "");
  }
  addToTempHistory(operatorName);

  displayNumber = tempResult;
  displayEl.innerText = tempResult;
  result = tempResult;

  if (displayNumber && tempHistoryVar && lastOperation) {
    // console.log(displayNumber, tempHistoryVar, lastOperation);

    mathOperation(lastOperation);
  } else {
    result = parseFloat(displayNumber);
  }
  lastOperation = operatorName;
});
inverse.addEventListener("click", e => {
  if (!displayNumber) return;
  hasDecimalPoint = false;
  const operatorName = "inverse";

  let tempResult = "";
  tempResult = 1 / parseFloat(displayNumber);
  if (tempSymbol !== "") {
    tempHistoryVar = tempHistoryVar.replace(tempSymbol, "");
  }
  addToTempHistory(operatorName);

  displayNumber = tempResult;
  displayEl.innerText = tempResult;
  result = tempResult;

  // tempHistoryVar += tempResult;
  // tempHistoryEl.innerText = tempHistoryVar;

  if (displayNumber && tempHistoryVar && lastOperation) {
    // console.log(displayNumber, tempHistoryVar, lastOperation);

    mathOperation(lastOperation);
  } else {
    result = parseFloat(displayNumber);
  }
  lastOperation = operatorName;
});

function addToTempHistory(name) {
  switch (name) {
    case "sqr":
    case "cube": {
      tempSymbol = " " + name + "(" + displayNumber + ")" + " ";
      // tempHistoryVar += " " + name + "(" + displayNumber + ")" + " ";
      break;
    }
    case "sqr-root": {
      tempSymbol = " " + "√" + "(" + displayNumber + ")" + " ";
      // tempHistoryVar += " " + "√" + "(" + displayNumber + ")" + " ";
      break;
    }
    case "inverse": {
      tempSymbol = "1/(" + displayNumber + ")";
      break;
    }
    case "/": {
      tempHistoryVar += displayNumber + " " + "÷" + " ";
      tempSymbol = "";
      break;
    }
    default: {
      // console.log(tempHistoryVar);
      // tempSymbol = displayNumber + " " + name + " ";
      tempHistoryVar += displayNumber + " " + name + " ";
      tempSymbol = "";
    }
  }

  tempHistoryVar += tempSymbol;
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
    default:
      // console.log("hii", result);
      break;
  }
}

equalEl.addEventListener("click", e => {
  if (!displayNumber || !tempHistoryVar) return;
  hasDecimalPoint = false;
  mathOperation(lastOperation);
  if (tempSymbol === "") {
    addToTempHistory("");
  }
  // console.log(result);
  savehistory.push(
    '<li class="last-result" ><p>' +
      tempHistoryVar +
      " = " +
      "</p>" +
      "<h3>" +
      result +
      "</h3></li>"
  );

  for (let i = 0; i < savehistory.length; i++) {
    if (i === 0) {
      savehistoryEl.innerHTML = savehistory[0];
    } else {
      savehistoryEl.innerHTML += savehistory[i];
    }
  }
  trash.style.display = "inline-block";

  // savehistory +=
  //   "<li><p>" +
  //   tempHistoryVar +
  //   " = " +
  //   "</p>" +
  //   "<h3>" +
  //   result +
  //   "</h3></li>";

  // savehistoryEl.innerHTML = savehistory;

  tempHistoryEl.innerText = tempHistoryVar + " = ";

  displayEl.innerText = result;

  tempHistoryVar = "";
  displayNumber = "";
});
signEl.addEventListener("click", e => {
  if (!displayNumber) return;
  displayNumber = displayNumber * -1;
  displayEl.innerText = displayNumber;
});
clearAllEl.addEventListener("click", () => {
  displayEl.innerText = 0;
  tempHistoryEl.innerText = "";
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
    if (displayNumber.toString() !== displayNumber) {
      // if displayNumber is not a string we cant use backspace
      return;
    } else {
      displayNumber = displayNumber.substring(0, displayNumber.length - 1);
    }
    displayEl.innerText = displayNumber;
  }
});

trash.addEventListener("click", () => {
  savehistory.length = 0;
  savehistoryEl.innerHTML = "<div>There is no history yet</div>";

  trash.style.display = "none";
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
