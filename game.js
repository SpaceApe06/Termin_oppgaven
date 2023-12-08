// Dette er tile mapen som blir brukt i spillet.
var mapWidth = window.innerWidth / 50 - 1;
var mapHeight = window.innerHeight / 50 - 1;

var game = document.getElementById("game");

class Tile {
	constructor(x, y, image) {
		this.x = x;
		this.y = y;
		this.image = image;
		this.tileElement = document.createElement("img");
	}
}

var tilemap = [[]];

for (let y = 0; y < mapHeight; y++) {
	tilemap[y] = [];
}
// Dette her lager selve tilemapen og setter inn bildene som skal være på tilemapen. Den er tilfeldig generert antall grass og ground tiles.
for (let y = 0; y < mapHeight; y++) {
	for (let x = 0; x < mapWidth; x++) {
		const tile = new Tile(x, y, "Resources/images/grass.png");
		random = Math.floor(Math.random() * 10);
		if (random > 3) {
			tile.image = "Resources/images/ground.png";
		}
		tile.tileElement.src = tile.image;
		tile.tileElement.style.width = "50px";
		tile.tileElement.style.height = "50px";
		tile.tileElement.style.position = "absolute";
		tile.tileElement.style.left = tile.x * 50 + "px";
		tile.tileElement.style.top = tile.y * 50 + "px";
        tile.tileElement.style.imageRendering = "pixelated";
		tilemap[y][x] = tile;
		game.appendChild(tile.tileElement);
	}
}
// Spilleren
class Player {
	constructor() {
		this.x = Math.floor(window.innerWidth / 100) - 1;
		this.y = Math.floor(window.innerHeight / 100) - 1;
		this.image = document.createElement("img");
		this.image.src = "Resources/images/player_1.png";
		this.image.style.width = "50px";
		this.image.style.height = "50px";
		this.image.style.position = "absolute";
		this.image.style.left = this.x * 50 + "px";
		this.image.style.top = this.y * 50 + "px";
        this.image.style.transition = "all 0.1s"
		this.canMove = true;
		game.appendChild(this.image);
	}

	move(deltaX, deltaY) {
		if (!this.canMove) {
			return;
		}
		const newPlayerX = this.x + deltaX;
		const newPlayerY = this.y + deltaY;
		if (
			newPlayerX >= 0 &&
			newPlayerX < mapWidth &&
			newPlayerY >= 0 &&
			newPlayerY < mapHeight
		) {
			// Dette er for når spilleren er på en grass tile så gjør det at det er en sjanse for gresset til å interacte med spilleren og 
			// tilfeldighvis møtte på en slange. 
			console.log(tilemap);
			const newTile = tilemap[newPlayerY][newPlayerX].image;
			console.log(newTile);
			random = Math.floor(Math.random() * 10);
			if (newTile === "Resources/images/grass.png") {
				if (random < 3) {
					encounter();
				}
			}

			this.x = newPlayerX;
			this.y = newPlayerY;
			this.image.style.left = this.x * 50 + "px";
			this.image.style.top = this.y * 50 + "px";

			if (deltaX === 1) {
				var playerImageName = "Resources/images/player_2.png";
			} else if (deltaX === -1) {
				var playerImageName = "Resources/images/player_3.png";
			} else if (deltaY === 1) {
				var playerImageName = "Resources/images/player_4.png";
			} else if (deltaY === -1) {
				var playerImageName = "Resources/images/player_1.png";
			}
			this.changePlayerImage(playerImageName);
		}
	}

	changePlayerImage(imageName) {
		this.image.src = imageName;
	}
}

const player = new Player();

// dette er kontrollene for spillet som gjør at spilleren kan bevege seg rundt på kartet
document.addEventListener("keydown", function (event) {
	const keyCode = event.keyCode || event.which;
	switch (keyCode) {
		case 37: // venste pil tast
			player.move(-1, 0);
			break;
		case 38: // opp pil tast
			player.move(0, -1);
			break;
		case 39: // høyre pil tast
			player.move(1, 0);
			break;
		case 40: // nedover pil tast
			player.move(0, 1);
			break;
        case 73:
            inventory.style.display = "flex";
            break;
		default:
			break;
	}
});

class Snake {
	constructor() {
		this.type;
		this.image = document.createElement("img");
		this.image.src = "Resources/images/snakes/white_snake.png";
		this.image.draggable = false;
	}
}
// gjør sånn at elementene til slangen blir lagt til i html dokumentet
var encounterDiv = document.querySelector("#encounter"); 
// når spilleren er på gresset så er det en sjanse for at det dukker opp en slange
function encounter() {
	if (!player.canMove) {
		return;
	}
	let encounter = Math.floor(Math.random() * 4);

	let snake = new Snake();

	// Dette er slangene som kan dukke opp
	if (encounter === 0) {
		snake.type = "white";
		snake.image.src = "Resources/images/snakes/white_snake.png";
	} else if (encounter === 1) {
		snake.type = "red";
		snake.image.src = "Resources/images/snakes/Red_snake.png";
	} else if (encounter === 2) {
		snake.type = "green";
		snake.image.src = "Resources/images/snakes/green_snake.png";
	} else if (encounter === 3) {
		snake.type = "blue";
		snake.image.src = "Resources/images/snakes/Blue_snake.png";
}
	player.canMove = false;
	
// Lager slange vinduet når man møtter på en slange og lager elemente til den.
	encounterDiv.innerHTML = "";

	let encounterText = document.createElement("h1");
	encounterText.innerHTML = "You encountered a " + snake.type + " snake!";
	encounterDiv.appendChild(encounterText);

	catchButton = document.createElement("button");
	catchButton.innerHTML = "Catch";
    catchButton.type = "submit";
	catchButton.addEventListener("click", function () {
        encounterDiv.style.display = "none";    
		player.canMove = true;
	});
    var form = document.createElement("form");
    form.method = "post";
    form.action = "catch.php";
	form.appendChild(catchButton);

    typeThing = document.createElement("input");
    typeThing.type = "hidden";
    typeThing.name = "type";
    typeThing.value = snake.type;
    form.appendChild(typeThing);
    
    encounterDiv.appendChild(form);

	runButton = document.createElement("button");
	runButton.innerHTML = "Run";
	runButton.addEventListener("click", function () {
		encounterDiv.style.display = "none";
		player.canMove = true;
	});
	encounterDiv.appendChild(runButton);

	encounterDiv.appendChild(snake.image);
	encounterDiv.style.display = "flex";
}
//dette gjør at spill menyen vises eller blir gjemt når man trykker på esc knappen
// $(document).keyup(function(e) {
// 	if (e.keyCode == 27) {                   // esc
// 	  if ($('#gameMenu').is(':visible')) {
// 		$('#gameMenu').hide();
// 	  } else {
// 		$('#gameMenu').show();
// 	  }
// 	}
//   });