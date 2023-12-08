<!DOCTYPE <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>BattleSnakes</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> <!-- Henter jquery-->
    <div id="gameMenu">
        <button id="Game_button" type="submit" onclick="toggleMenu()">Resume</button>
        <button id="Game_button" type="submit">Snakes</button>
        <button id="Game_button" type="submit" onclick="window.location='Main_menu.php'">Quit to menu</button>
    </div>
    <div id="game"> <!-- Her ligger selve spillet -->
    </div>

    <div id="encounter"> <!-- Her ligger slange vinduet -->

    </div>
    <script src="game.js"></script>
</body>

</html>