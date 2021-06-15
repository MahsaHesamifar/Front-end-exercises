const historyBtn = document.getElementById("history-btn");
const memoryBtn = document.getElementById("memory-btn");
const historyInfo = document.getElementById("history-info");
const memoryInfo = document.getElementById("memory-info");

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
