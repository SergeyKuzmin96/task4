<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="../public/css/main.css">
    <title>Комментарии пользователей</title>
</head>
<body>
<a href="../">Главная страница</a>

<div id="comments">

</div>
<button type="submit" class="show-comments-btn">Show more comments</button>
<p id="response" class="msg none">Lorem ipsum.</p>

<script src="../assets/js/jquery-3.4.1.min.js"></script>
<script src="../assets/js/javascript/allComments.js"></script>
<script src="../assets/js/javascript/outputComments.js"></script>

</body>
</html>