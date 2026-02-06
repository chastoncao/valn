const yesBtn = document.querySelector(".yesButton");
const noBtn = document.querySelector(".noButton");

noBtn.addEventListener("click", () => {
  window.location.href = "altYesIndex.html";
});

yesBtn.addEventListener("click", () => {
  window.open("https://www.roblox.com", "_blank");
});