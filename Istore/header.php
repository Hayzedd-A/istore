<?php


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../flatpickr/flatpickr.css">
    <link href="../bootstrapLibrary/bootstrap.min.css" rel="stylesheet"  crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <link href="istoreStyle.css" rel="stylesheet">

    <title>iStore-signup</title>
</head>

<body>

<nav class="navbar fixed-top navbar-expand-lg bg-light">
    <div class="container-fluid " >
        <a class="navbar-brand" href="#">iStore</a>

        <ul class="nav nav-tabs flex-fill justify-content-end">
            <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle btn-success" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Get Started</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="signup.php">Signup as seller</a></li>
                    <li><a class="dropdown-item" href="signup_buyer.php">Signup as buyer</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="login" href="login.php">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="#">About us</a>
            </li>
        </ul>
    </div>
</nav>

