<?php
require_once '../app/newMessageValidate.php';
require_once 'dbComp.php';

function saveNewComment($data): array

{
    $data = newMessageValidate($data);

    if (!empty($data['errors'])) {

        return [
            "status" => false,
            "message" => "Проверьте правильность полей",
            "fields" => $data['errors']
        ];
    } else {

        $full_name = $data['full_name'];
        $message = $data['message'];
        mysqli_query(getDB(), "INSERT INTO `messages` (`full_name`, `message`) VALUES ('$full_name', '$message')");

        return [
            "status" => true,
            "message" => "Сообщение отправленно"
        ];
    }
}


function getComments($count): array
{
    $result = mysqli_query(getDB(), "SELECT * FROM messages ORDER BY id DESC LIMIT $count");
    $comments = array();

    if (mysqli_num_rows($result) > 0) {

        while ($row = $result->fetch_assoc()) {
            $comments[] = $row;
        }
        return [
            "status" => true,
            "comments" => $comments
        ];
    } else {

        return [
            "status" => false,
            "message" => 'Комментариев нет'
        ];
    }
}

function getCommentsByAuthor($author): array
{
    $full_name = $author;
    if($full_name === ""){

        return [
            "status" => false,
            "message" => "Напишите имя пользователя",
        ];
    }

    $result = mysqli_query(getDB(), "SELECT * FROM `messages` WHERE `full_name` = '$full_name'");

    if ((mysqli_num_rows($result) > 0)) {

        $comments = array();
        while ($row = $result->fetch_assoc()) {
            $comments[] = $row;
        }
        return [
            "status" => true,
            "comments" => $comments
        ];
    } else {

        return [
            "status" => false,
            "message" => "Пользователь с таким именем не оставлял комментариев",
        ];
    }
}