function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email !== "" && password !== "") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);
        location.href = "index.html";
    } else {
        alert("Please enter email and password");
    }
}
