<?php
session_start();
include("db_connect.php");


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $id = $_SESSION['id'];
    $type = $_POST['type'];

    $sql = "SET FOREIGN_KEY_CHECKS=0;";
    $result = mysqli_query($conn, $sql);

    $sql = "INSERT INTO caught (userID, type) VALUES ('$id', '$type')";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        header("Location: game.php");
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}
?>
