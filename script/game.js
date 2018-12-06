var backgroundSrc = "./File/Image/"
var gameArea = $('div');

function startGame() {
	addInitialBackground();
}

function addInitialBackground() {
	this.image = new Image();
	this.image.src = backgroundSrc;
	this.width = gameArea.css('width');
	this.height = gameArea.css('height');
	this.speedX = 0;
    this.speedY = 0;    
    this.x = 0;
    this.y = 0;

}