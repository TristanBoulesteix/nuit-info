var background;

function startGame() {
	background = new component(656, 270, "../File/img/Background/jungle.jpg", 0, 0);
	gameArea.initialize();
	$(gameArea.canvas).click(gameArea.start());
}

var gameArea = {
	canvas : document.createElement("canvas"),
	initialize : function() {
		this.canvas.width = 480;
		this.canvas.height = 270;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.getElementById("subTitle"));
		this.frameNo = 0;
		},
	start : function() {
		this.interval = setInterval(updateGameArea, 6);
	},
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
	}
}

function component(width, height, color, x, y) {
	this.image = new Image();
	this.image.src = color;
	this.width = width;
	this.height = height;
	this.speedX = 0;
	this.speedY = 0;
	this.x = x;
	this.y = y;    
	this.update = function() {
		ctx = gameArea.context;
		if (this.image.complete) {
			ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
			ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
		}
	}
	this.newPos = function() {
		this.x += this.speedX;
		this.y += this.speedY;
		if (this.x == -(this.width)) {
			this.x = 0;
		}
	}
}

function updateGameArea() {
	gameArea.clear();
	background.speedX = -1;
	background.newPos();    
	background.update();
}