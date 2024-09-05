function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required.";
        return false;
    } else if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return false;
    }

    errorMessage.textContent = "";
    alert("Login successful");
    return true; // Submit form
}
