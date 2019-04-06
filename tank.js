var Tank = function (img, x, y, direction, hp, speed, maxSpeed, boost, angleSpeed, rotate) {
	this.img = img;
	this.x = x;
	this.y = y;
	this.direction = direction;
	this.hp = hp;
	this.speed = speed;
	this.maxSpeed = maxSpeed;
	this.boost = boost;
	this.angleSpeed = angleSpeed;
	this.rotate = rotate;
}
Tank.prototype.Draw = function () {
	ctx.translate(this.x, this.y);
	ctx.rotate(this.rotate);
	ctx.drawImage(this.img, 0, 0);
	ctx.rotate(0);
	ctx.translate(-this.x, -this.y);
}
