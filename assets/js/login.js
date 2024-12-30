document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        fetch("./data/users.json")
            .then((response) => response.json())
            .then((users) => {
                const user = users.find(
                    (u) => u.username === username && u.password === password
                );

                if (user) {
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("lastLoginTime", Date.now());
                    localStorage.setItem("username", username);

                    window.location.href = "./main.html";
                } else {
                    document.getElementById("error-message").style.display = "block";
                }
            })
            .catch((error) => console.error("Error fetching user data:", error));
    });
});

document.getElementById('show-password').addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text'; // Show password
    } else {
        passwordField.type = 'password'; // Hide password
    }
});
