const div1 = document.querySelector("#div1");
div1.addEventListener("click", (e) => {
  const t = e.target;
  if (t.tagName.toLowerCase() === "button") {
    console.log("button被点击了");
    console.log("被点击的dataset-id是:" + t.dataset.id);
  }
  if (t.tagName.toLowerCase() === "span") {
    console.log("span被点击了");
    console.log("被点击的span是:" + t.textContent);
  }
});
