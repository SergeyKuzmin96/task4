<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css" href="../public/css/main.css">
    <title>Комментарии пользователя</title>
</head>
<body>
<a href="../">Главная страница</a>

<div id="comments">

</div>
<form name="userCommentsForm">
    <input name="full_name" type="text" placeholder="ФИО">
    <br>
    <button type="submit" class="show-user-comments">Отправить</button>
    <p id ="response" class="msg none"></p>
</form>

<script src="../assets/js/jquery-3.4.1.min.js"></script>
<script src="../assets/js/jquery/userComments.js"></script>
<script src="../assets/js/javascript/outputComments.js"></script>

</body>
</html>