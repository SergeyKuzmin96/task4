<?php
session_start();

require_once '../components/commentComp.php';

$response = saveNewComment($_POST);

echo json_encode($response);



