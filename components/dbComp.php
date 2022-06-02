<?php

require_once '../config/config_db.php';

function getDB()
{
    $connect = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);

    if (!$connect) {
        die('Error connect to DataBase');
    } else {
        return $connect;
    }
}
