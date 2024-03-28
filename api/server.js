const express = require("express");
const session = require("express-session");
const cors = require("cors");
const routes = require("./src/routes/router");

const app = express();
const port = 3000;

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log(`Back-end port: ${port}`);
});