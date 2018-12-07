$(window).on('load', function() {
	startGame();
});

var backgroundSrc = 'File/img/Background/desert.png';
var background;

var gameArea = {
	canvas: document.getElementById("gameArea"),
	start: function() {
		this.context = this.canvas.getContext("2d");
		this.frameNo = 0;
		this.interval = setInterval(updateGameArea, 20);
	},
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
	}
}

function startGame() {
	background = new Background();
	gameArea.start();
}

function Background() {
	this.image = new Image();
	this.image.src = backgroundSrc;
	this.width = $(gameArea.canvas).css('width');
	this.height = $(gameArea.canvas).css('height');
	this.speedX = 0;
	this.speedY = 0;
	this.x = 0;
	this.y = 0;
	this.update = function() {
		$('canvas').css('background-image',backgroundSrc);
		currentContext = gameArea.context;
		currentContext.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
	}
	this.setNewPosition = function() {
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
	background.setNewPosition();    
	background.update();
}