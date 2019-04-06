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

	var tank1 = new Tank(tankGreen, 10, 10, 0, 100, 10, 0);


	$('body').keypress(function (e) {
		if (e.key == 38) {
			direction = 1;
			if (tank.speed < tank.maxSpeed) {
				tank.speed = 10;
				tank.x += tank.speed
			}
		} else if (e.key == 40) {
			direction = -1;
			if (tank.speed < tank.maxSpeed) {
				tank.speed += tank.boost;
			}
		} else if (e.key == 37) {
			tank.rotate -= tank.angleSpeed;
		} else if (e.key == 39) {
			tank.rotate += tank.angleSpeed;
		}




	})

	function loop() {



		DrawMap(bacground, 0, 0);
		tank1.Draw();
		console.log("tic");

	}

	setInterval(function () {
		loop();
		//console.log("Tic")

	}, 00)

})
