const timeElement = document.getElementById("currentTime");

function updateTime() {
  timeElement.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);
