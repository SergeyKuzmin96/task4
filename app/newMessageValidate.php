<?php

function newMessageValidate($data)
{
    $full_name = $data['full_name'];
    $message = $data['message'];
    $error_fields = [];

    if ($message === '') {
        $error_fields[] = 'message';
    }

    if ($full_name === '') {
        $error_fields[] = 'full_name';
    }

    $data['errors'] = $error_fields;
    return $data;
}