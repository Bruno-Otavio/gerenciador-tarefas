const form = document.querySelector("#loginForm");

const login = (form) => {
    const data = {
        email: form.email.value,
        senha: form.senha.value,
    };
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    login(form)
    form.senha.value = "";
});