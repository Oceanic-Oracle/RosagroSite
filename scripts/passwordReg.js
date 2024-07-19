function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordRepeatInput = document.getElementById('password_repeat');
    const eyeIcon = document.getElementById('eye');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordRepeatInput.type = "text";
        eyeIcon.src = "images/closedEye.png";
    } else {
        passwordInput.type = "password";
        passwordRepeatInput.type = "password";
        eyeIcon.src = "images/openedEye.png";
    }
}