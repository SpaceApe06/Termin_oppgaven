<?php
// Kobler til BattleSnakes databasen
    $server = "localhost";
    $user = "root";
    $pw = "ADMIN";
    $db = "BattleSnakesDB";

    $conn = mysqli_connect($server, $user, $pw, $db);

    if(!$conn) {
        echo "Connection failed!";        
    }