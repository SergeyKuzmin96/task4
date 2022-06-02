<?php
session_start();
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Форма обратной связи</title>
    <link rel="stylesheet" href="../public/css/main.css">
</head>
<body>
<a href="../">Главная страница</a>

<form name="feedbackForm">
    <input id="full_name" name="full_name" type="text" placeholder="ФИО">
    <br>
    <input id="message" name="message" type="text" placeholder="Ваше сообщение">
    <br>
    <button type="submit" name="feedback-btn" class="feedback-btn">Отправить</button>
    <p id="response" class="msg none">Lorem ipsum.</p>
</form>

<script src="../assets/js/jquery-3.4.1.min.js"></script>
<script src="../assets/js/javascript/feedback.js"></script>

</body>
</html>