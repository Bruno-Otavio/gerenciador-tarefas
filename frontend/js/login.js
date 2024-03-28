const form = document.querySelector("#loginForm");

const login_url = "http://localhost:3000/users/login";
const tarefas_url = "http://127.0.0.1:5500/frontend/pages/tarefas.html";

let user = {
    id: 0,
    logged: false
};

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

    fetch(request);
    
    form.senha.value = "";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    login(form)
});

export default user;
