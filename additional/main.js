"use strict";
class DomElement {
  constructor(selector, height, width, bg, fontSize, position) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.position = position;
  }
  createElem() {
    if (this.selector.charAt(0) === ".") {
      let elem = document.createElement("div");
      console.log(elem);
      elem.style.width = this.width;
      elem.style.height = this.height;
      elem.style.background = this.bg;
      elem.style.fontSize = this.fontSize;
      elem.style.position = this.position;
      elem.className = ("class", this.selector.slice(1));
      let text = document.createTextNode(this.text);
      elem.appendChild(text);
      let prevElem = document.getElementById("h1");
      prevElem.insertAdjacentElement("afterend", elem);
      let createdElem = document.getElementsByTagName("div");
      console.log(createdElem);
    } else if (this.selector.charAt(0) === "#") {
      let elem = document.createElement("p");
      console.log(elem);
      elem.setAttribute("id", this.selector.slice(1));
      elem.style.width = this.width;
      elem.style.height = this.height;
      elem.style.background = this.bg;
      elem.style.fontSize = this.fontSize;
      elem.style.position = this.position;
      let text = document.createTextNode(this.text);
      elem.appendChild(text);
      let prevElem = document.getElementById("h1");
      prevElem.insertAdjacentElement("afterend", elem);
      let createdElem = document.getElementsByTagName("p");
      console.log(createdElem);
    }
  }
  checkElem() {}
}
const newElem = new DomElement(
  "#best",
  "100px",
  "100px",
  "red",
  "20px",
  "absolute"
);

document.addEventListener("DOMContentLoaded", newElem.createElem());
newElem.checkElem();
