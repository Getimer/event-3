const div1 = document.querySelector("#div1");
setTimeout(() => {
  const button = document.createElement("button");
  button.textContent = "click1";
  button.dataset.id = 1;
  div1.appendChild(button);
}, 1000);
div1.addEventListener("click", (e) => {
  const t = e.target;
  if (t.tagName.toLowerCase() === "button") {
    console.log("button被点击了");
    console.log("被点击的button是:" + t.textContent);
    console.log("被点击的button dataset-id是:" + t.dataset.id);
  }
});
