<!DOCTYPE html>
<html>
    <head>
        <title>BattleSnake register</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body id="BS_body">
        <div class="Logg_inn_container"> 
            <img id="tittelLogo" src="Resources/images/BattleSnakes_logo.svg" alt="BATTLESNAKES"> <!-- Legger til logoen -->
            <!-- Register -->
            <div id="Logg_inn">
                <h1 id="Logg_in_Title">Register</h1>
                <form action="register.php" method="post">
                    <div id="brukernavnPassord">
                        <label for="username">Username:</label>
                        <input type="text" name="username" required>
                    </div>
                    <div id="brukernavnPassord">
                        <label for="password">Password:</label>
                        <input type="password" name="password" required>
                    </div>
                    <div id="brukernavnPassord">
                        <label for="confirm_password">Confirm Password:</label>
                        <input type="password" name="confirm_password" required>
                    </div>
                    <button type="submit" id="loginButton" >Register</button>
                    <p>Already have an account? <a href="index.php">Login here</a></p>
                </form>
            </div>
        </div>
    </body>
</html>
