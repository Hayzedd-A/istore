<?php

include 'header.php'

?>

<div class="container form-container">
    <form class="row g-3 container ">
        <div class="col-md-6">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email">
        </div>

        <div class=" col-md-6">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control " id="password">
        </div>

        <div style="margin: 20px" class="form-button col-md-2">
            <input type="submit" id="submit" value="Login" class="col-md-12 btn btn-outline-success">
        </div>
    </form>
</div>

<?php

include 'footer.php'

?>
