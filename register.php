<?php
session_start();
include("db_connect.php");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm_password"];

    // Validate input
    if ($password !== $confirm_password) {
        echo "Passwords do not match";
        exit();
    }

    // Hash the password before storing it in the database
    $hashed_password = hash("sha256", $password);

    // Insert user data into the database
    $query = "INSERT INTO users (username, password) VALUES ('$username', '$hashed_password')";
    $result = mysqli_query($conn, $query);

    if ($result) {
        // Redirect to the login page after successful registration
        header("Location: index.php");
        exit();
    } else {
        echo "Registration failed";
    }
}
?>
