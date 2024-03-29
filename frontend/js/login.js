const form = document.querySelector("#loginForm");
const error = document.querySelector("#error");

const login_url = "http://localhost:3000/users/login";
const tarefas_url = "http://127.0.0.1:5500/frontend/pages/tarefas.html";

const login = (form) => {
    const data = {
        email: form.email.value.toLowerCase(),
        senha: form.senha.value.toLowerCase(),
    };

    const request = new Request(login_url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
            "Content-Type": "application/json",
        }),
    });

    fetch(request)
        .then(res => res.json())
        .then(res => {
            if (res.loggedIn) {
                window.location.replace(tarefas_url);
            } else {
                error.innerHTML = "<span>Email ou Senha Incorretos!</span>"
            }
        });
    
    form.senha.value = "";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    login(form)
});
