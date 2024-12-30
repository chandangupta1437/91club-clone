document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const lastLoginTime = localStorage.getItem("lastLoginTime");
    const currentTime = Date.now();

    if (!isLoggedIn || currentTime - lastLoginTime >= 6 * 60 * 60 * 1000) {
        alert("Your session has expired. Please log in again.");
        localStorage.clear();
        window.location.href = "./index.html";
        return;
    }

    const username = localStorage.getItem("username");
    // document.getElementById("user-info").textContent = `Welcome, ${username}`;

    document.getElementById("logout").addEventListener("click", () => {
        localStorage.clear();
        window.location.href = "./index.html";
    });
});
document.getElementById("sec30").addEventListener("click", function () {
    window.location.href = "gamerecordfile\\sec30.html";

});
document.getElementById("min1").addEventListener("click", function () {
    window.location.href = "gamerecordfile\\min1.html";

});
document.getElementById("min3").addEventListener("click", function () {
    window.location.href = "gamerecordfile\\min3.html";

});
document.getElementById("min5").addEventListener("click", function () {
    window.location.href = "gamerecordfile\\min5.html";

});