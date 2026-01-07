// Redirect if not logged in
if (
    !localStorage.getItem("isLoggedIn") &&
    !location.pathname.includes("login") &&
    !location.pathname.includes("register")
) {
    location.href = "login.html";
}

// Logout handler
document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.onclick = () => {
            localStorage.clear();
            location.href = "login.html";
        };
    }
});
