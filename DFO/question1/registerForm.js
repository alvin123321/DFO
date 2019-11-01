function validateForm() {
    const userName = document.getElementById("name").value;
    const password = document.getElementById("psw").value;
    const comfirl_password = document.getElementById("psw-comfirm").value;
    const email = document.getElementById("email").value;

    // Email regular expression
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    // Validate user name 
    if (userName === "") {
        alert("User Name can not be empty!");
        document.getElementById("name").focus();
        return;
    }

    // Validate the password 
    if (password.length < 6 || password.length > 8) {
        alert("Length of the password must between 6 and 8!");
        clearInput("psw");
        document.getElementById("psw").focus();
        return;
    }

    // Validate the comfirm password 
    if (password !== comfirl_password) {
        alert("Password does not match!");
        clearInput("psw-comfirm");
        document.getElementById("psw-comfirm").focus();
        return;
    }

    // Validate the E-mail 
    if (!emailPattern.test(email)) {
        alert("Please enter the correct E-mail format!");
        clearInput("email");

    }

    // call server and check if user name exists
    $.ajax({
        url: 'userName.php',
        type: 'post',
        data: { name: name },
        success: function (response) {

            if (response > 0) {
                alert('user name already exist!');
            }

        }
    });

    alert("Success");
    document.getElementById("register-form").reset();
}

// clear the input field
function clearInput(inputName) {
    document.getElementById(inputName).value = "";
}