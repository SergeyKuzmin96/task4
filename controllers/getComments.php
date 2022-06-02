<?php
session_start();
require_once '../components/commentComp.php';

$count = $_POST['count'];

$response = getComments($count);

echo json_encode($response);


