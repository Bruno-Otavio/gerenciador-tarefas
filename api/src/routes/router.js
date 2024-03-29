const express = require("express");
const router = express.Router();

const users = require("../controllers/models/user");
const tasks = require("../controllers/models/task");

const verifier = (req, res) => {
    res.json("Back-end sucinto");
}

router.get("/", verifier);

router.get("/users", users.getAll);
router.get("/users/:id", users.get);
router.post("/users", users.create);
router.post("/users/login", users.login);
router.get("/user/session", (req, res) => {
    res.status(202).json(req.session).end();
});

router.get("/tasks", tasks.getAll);
router.get("/tasks/:id", tasks.get);
router.post("/tasks", tasks.create);
router.put("/tasks/:id", tasks.update);
router.delete("/tasks/:id", tasks.deleteData);

module.exports = router;
