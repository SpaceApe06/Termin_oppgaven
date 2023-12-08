<?php
session_start();
include "db_connect.php";


if(isset($_POST['username']) && isset($_POST['password'])) {

    function validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
}

$username = validate($_POST['username']);
$password = validate($_POST['password']);

if(empty($username)) {
    header ("Location: index.php?error=Username is required!");
    exit();
}
else if(empty($password)) {
    header ("Location: index.php?error=Password is required!");
    exit();
}
// hasher passordet så det ikke er mulig å se det i databasen
$hashed_password = hash("sha256", $password);


$sql = "SELECT * FROM users WHERE username='$username'"; 

$result = mysqli_query($conn, $sql);


if(mysqli_num_rows($result) === 1) {
    $row = mysqli_fetch_assoc($result);
    if ($row['username'] === $username && $row['password'] === $hashed_password) {
        echo "Logged in";
        $_SESSION['username'] = $row['username'];
        $_SESSION['id'] = $row['userID'];
        header("Location: Main_menu.php");
        exit();
    }
    else{
        header("Location: index.php?error=Invalid username or password!");
        exit();
    }
}
else {
    header("Location: index.php");
    exit();
}

?>