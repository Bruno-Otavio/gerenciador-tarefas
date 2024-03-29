const form = document.querySelector("#cadastro");
const submit = document.querySelector("#submit-btn");

const loginAPI_url = "http://localhost:3000/users";
const login_url = "http://127.0.0.1:5500/frontend/pages/login.html";

const cadastro = (form) => {
    const data = {
        nome: form.nome.value,
        email: form.email.value,
        senha: form.senha.value,
    };

    const request = new Request(loginAPI_url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
            "Content-Type": "application/json"
        }),
    });

    fetch(request)
        .then(window.location.replace(login_url));
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    cadastro(form);
    form.senha.value = "";
});
