const historyBtn = document.getElementById("history-btn");
const memoryBtn = document.getElementById("memory-btn");
const historyInfo = document.getElementById("history-info");
const memoryInfo = document.getElementById("memory-info");
const menuBtn = document.getElementById("menu-btn");
const subMenu = document.getElementById("sub-menu");
const historyBtnMenu = document.getElementById("history-btn-menu");
const keyContainer = document.getElementById("key-container");
const historyS = document.getElementById("history-s");
const toggleContainer = document.getElementById("toggle-container");

let showMenu = false;
let showHistory = false;

historyBtn.onclick = () => {
  historyInfo.style.marginLeft = "0%";
  memoryBtn.style.borderBottom = "3px solid #dee2ff";
  historyBtn.style.borderBottom = "3px solid #6f798a";
};
memoryBtn.onclick = () => {
  historyInfo.style.marginLeft = "-50%";
  historyBtn.style.borderBottom = "3px solid #dee2ff";
  memoryBtn.style.borderBottom = "3px solid #6f798a";
};

menuBtn.onclick = () => {
  // change display menu status

  if (showMenu) {
    // subMenu.style.display = "none";
    subMenu.style.left = "-70%";
  } else {
    // subMenu.style.display = "flex";
    subMenu.style.left = "0";
  }
  showMenu = !showMenu;
};

historyBtnMenu.onclick = () => {
  // change display menu status

  if (showHistory) {
    historyS.style.display = "none";
    toggleContainer.style.display = "none";
    toggleContainer.className += "show-720";

    toggleContainer.className.replace("toggle-container-s", "toggle-container");
    toggleContainer.className.replace("toggle-container-s", "");
    toggleContainer.className += " toggle-container";
    keyContainer.style.display = "flex";
  } else {
    // show history
    // historyS.style.display = "flex";
    toggleContainer.style.display = "block";

    toggleContainer.className.replace("show-720", "");

    toggleContainer.className.replace("toggle-container", "");
    toggleContainer.className += " toggle-container-s";

    keyContainer.style.display = "none";
  }
  showHistory = !showHistory;
};
