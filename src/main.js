setTimeout(() => {
  const button = document.createElement("button");
  const span = document.createElement("span");
  span.textContent = "click1";
  div1.appendChild(button);
  button.appendChild(span);
}, 1000);
on("click", "#div1", "button", () => {
  console.log("button被点击了");
});
function on(eventType, element, selector, fn) {
  if (!(element instanceof Element)) {
    element = document.querySelector(element);
  }

  element.addEventListener(eventType, (e) => {
    let t = e.target;
    while (!t.matches(selector)) {
      if (element === t) {
        t = null;
        break;
      }
      t = t.parentNode;
    }
    t && fn.call(t, e, t);
  });
  return element;
}
