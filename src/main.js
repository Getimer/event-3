setTimeout(() => {
  const button = document.createElement("button");
  button.textContent = "click1";
  button.dataset.id = 1;
  div1.appendChild(button);
}, 1000);
on("click", "#div1", "button", () => {
  console.log("button被点击了");
});
function on(eventType, element, selector, fn) {
  if (element instanceof Element) {
    element = document.querySelector(element);
  }

  element.addEventListener(eventType, (e) => {
    const t = e.target;
    if (t.matches(selector)) {
      fn(e);
    }
  });
}
