<?php
session_start();
require_once '../components/commentComp.php';

$author = $_POST['full_name'];

$response = getCommentsByAuthor($author);

echo json_encode($response);
