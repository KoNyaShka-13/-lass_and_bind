"use strict";

let btn = document.getElementById('btn');

class Options {//Добавляем свойства
	constructor(height, width, backgroundColor, fontSize, textAlign) {
		this.height = height + 'px';
		this.width = width + 'px';
		this.backgroundColor = backgroundColor;
		this.fontSize = fontSize + 'px';
		this.textAlign = textAlign;
		this.makeNewDiv = this.makeNewDiv.bind(this)//Чтобы не терялся this
	}
	makeNewDiv() {
		let newDiv = document.createElement('div');
		document.body.appendChild(newDiv);//Где будет появляться новый div
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

