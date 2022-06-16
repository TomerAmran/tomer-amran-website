const root = document.getElementById("root");
const newButton = document.createElement("button");
newButton.innerHTML = "click me";
newButton.addEventListener("click", () => console.log("button clicked"));
setTimeout(() => {
  root.appendChild(newButton);
}, 1000);
