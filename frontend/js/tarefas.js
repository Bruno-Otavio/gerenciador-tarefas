const fetchUserSession = async () => {
    const user = await fetch("http://localhost:3000/user/session", { method: "GET"})
        .then((res) => res.json());

    return await user;
}

window.onload = async () => {
    const user = await fetchUserSession();
    console.log(user);
};
