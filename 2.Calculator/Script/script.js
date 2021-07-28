const historyBtn = document.getElementById("history-btn");
const memoryBtn = document.getElementById("memory-btn");
const historyInfo = document.getElementById("history-info");
const memoryInfo = document.getElementById("memory-info");
const menuBtn = document.getElementById("menu-btn");
const subMenu = document.getElementById("sub-menu");

let showMenu = false;

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
