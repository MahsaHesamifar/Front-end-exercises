const historyBtn = document.getElementById("history-btn");
const memoryBtn = document.getElementById("memory-btn");
const historyInfo = document.getElementById("history-info");
const memoryInfo = document.getElementById("memory-info");
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("sub-menu");
let showMenu = false;

historyBtn.onclick = () => {
  historyInfo.style.marginLeft = "0%";
  memoryBtn.style.border = "none";
  historyBtn.style.borderBottom = "4px solid #6f798a";
};
memoryBtn.onclick = () => {
  historyInfo.style.marginLeft = "-50%";
  historyBtn.style.border = "none";
  memoryBtn.style.borderBottom = "4px solid #6f798a";
};

menuBtn.onclick = () => {
  // change display menu status

  if (showMenu) {
    menu.style.display = "none";
    // menu.style.left = "-70%";
  } else {
    menu.style.display = "flex";
    // menu.style.left = "0";
  }
  showMenu = !showMenu;
};
