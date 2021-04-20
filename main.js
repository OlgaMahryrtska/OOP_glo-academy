"use strict";
class DomElement {
  constructor(selector, height, width, bg, fontSize, sometext) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = sometext;
  }
  createElem() {
    if (this.selector.charAt(0) === ".") {
      let elem = document.createElement("div");
      console.log(elem);
      elem.style.width = this.width;
      elem.style.height = this.height;
      elem.style.background = this.bg;
      elem.style.fontSize = this.fontSize;
      elem.className = ("class", this.selector.slice(1));
      let text = document.createTextNode(this.text);
      elem.appendChild(text);
      let prevElem = document.getElementById("h1");
      prevElem.insertAdjacentElement("afterend", elem);
    } else if (this.selector.charAt(0) === "#") {
      let elem = document.createElement("p");
      console.log(elem);
      elem.setAttribute("id", this.selector.slice(1));
      elem.style.width = this.width;
      elem.style.height = this.height;
      elem.style.background = this.bg;
      elem.style.fontSize = this.fontSize;
      let text = document.createTextNode(this.text);
      elem.appendChild(text);
      let prevElem = document.getElementById("h1");
      prevElem.insertAdjacentElement("afterend", elem);
    }
  }
  writeText() {}
}
const newElem = new DomElement("#best", 15, 48, "red", 26, "javaScript lesson");
newElem.createElem();
