const { getUsers, postUser } = require("../../controllers/usersController/usersController");

const router = require("express").Router();

router.get("/getusers", getUsers)
router.post("/postuser", postUser)

module.exports = router;