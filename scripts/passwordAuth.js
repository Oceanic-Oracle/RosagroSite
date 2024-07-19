function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = document.getElementById('eye');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "images/closedEye.png";
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "images/openedEye.png";
    }
}