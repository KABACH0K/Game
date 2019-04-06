var ctx, canvas;

$(document).ready(function () {
	canvas = document.getElementById('canvas');

	ctx = canvas.getContext("2d");

	// объявляем канвас

	function loadImage(name) {
		var img = new Image();
		img.src = name;
		return img;
	}
	// загружает картинку в переменную

	var bacground = loadImage('bg.png');

	var tankGreen = loadImage('tank_green.png')

	function DrawMap(img) {
		ctx.drawImage(img, 0, 0);
	}

	var tank1 = new Tank(tankGreen, 10, 10, 0, 100, 0, 10, 2, 0.2, 0);


	function loop() {
		ctx.rotate(0);
		ctx.translate(0, 0);
		DrawMap(bacground, 0, 0);
		//tank1.Draw();

	}

	setInterval(function () {
		ctx.clearRect(0, 0, 800, 480);
		ctx.rotate(0);
		ctx.translate(0, 0);
		DrawMap(bacground, 0, 0);
		//console.log("Tic")

	}, 100)

})
