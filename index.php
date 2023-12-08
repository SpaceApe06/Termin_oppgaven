<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>BattleSnakes Logg in</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css">
    </head>
    <body id="BS_body">
        <div>
            <div class="Logg_inn_container">
                <img id="tittelLogo" src="Resources/images/BattleSnakes_logo.svg" alt="BATTLESNAKES"> <!-- Legger til logoen -->
                <!-- Logg inn -->
                <div id="Logg_inn">
                    <h1 id="Logg_in_Title">Logg inn</h1>
                    <form method="post" action="login.php">
                    <div id="brukernavnPassord">
                        <label for="username">username:</label>
                        <input type="text" id="username" name="username" placeholder="Username" maxlength="20"><br><br>
                    </div>
                    <div id="brukernavnPassord">
                        <label for="password">password:</label>
                        <input type="password" id="password" name="password" placeholder="Password" maxlength="20"><br><br>
                    </div>
                    <!-- <input type="submit" value="Submit"> -->
                    <button id="loginButton" type="submit" >Login</button><br/>
                    <a href="register_page.php">Don't have an account? Sign Up</a>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>