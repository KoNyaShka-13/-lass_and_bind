"use strict";

let btn = document.getElementById('btn');

class Options {
	constructor(height, width, backgroundColor, fontSize, textAlign) {
		this.height = height + 'px';
		this.width = width + 'px';
		this.backgroundColor = backgroundColor;
		this.fontSize = fontSize + 'px';
		this.textAlign = textAlign;
		this.makeNewDiv = this.makeNewDiv.bind(this)
	}
	makeNewDiv() {
		let newDiv = document.createElement('div');
		document.body.appendChild(newDiv);
		newDiv.textContent = prompt("Введите текст и он появится в отдельном блоке:", "");
		newDiv.style.cssText = 'height: ' + this.height + '; \
		width: ' + this.width + '; \
		background-color: ' + this.backgroundColor + '; \
		font-size: ' + this.fontSize + '; \
		text-align: ' + this.textAlign;
		};
	}
	let newOptions = new Options(150, 150, 'red', 24, 'center');
	
	btn.addEventListener('click', newOptions.makeNewDiv);






//class Options {
//  constructor (h, w, bgc, fsz, tali) {
//    this.height = h;
//    this.width = w;
//    this.backgroundColor = bgc;
//    this.fontSize = fsz;
//    this.textAlign = tali;
//    this.createNewDiv = this.createNewDiv.bind(this)
//  }
//  createNewDiv() {
//    const newDiv = document.createElement("div");
//    newDiv.textContent = prompt("What", "");
//    const style = `
//      height: ${this.height}px;
//      width: ${this.width}px;
//      background-color: ${this.backgroundColor};
//      fontSize: ${this.fontSize}px;
//      textAlign: ${this.textAlign};
//    `;
//    console.log(style)
//    newDiv.style.cssText = style;
//    document.body.appendChild(newDiv);
//  };
//}
//const newOption = new Options(100, 100, "red", 44, "center");
//
//
//
//document.querySelector(".btn");
//
//  btn.addEventListener("click", newOption.createNewDiv);





//class Options {
//	constructor(height, width, bgc, fontSize, textAlign) {
//		this.height = height + 'px';
//		this.width = width + 'px';
//		this.bgc = bgc;
//		this.fontSize = fontSize + 'px';
//		this.textAlign = textAlign;
//	}
//
//	createDiv(text) {
//			let element = document.createElement('div');
//			element.textContent = text;
//			element.style.height = this.height;
//			element.style.width = this.width;
//			element.style.backgroundColor = this.bgc;
//			element.style.fontSize = this.fontSize;
//			element.style.textAlign = this.textAlign;
//			document.body.appendChild(element);
//			return element;
//	}
//}
//
//let option = new Options(50, 300, 'red', 20, 'center');
//let option2 = new Options(50, 300, 'green', 30, 'center');
//
//option.createDiv('Hello');
//option2.createDiv('World');