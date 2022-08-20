const router = require("express").Router();
const userControler = require("../controllers/studentControlers");
// const studentimageuploadcontroler = require('../controllers/studentimageuploadcontroler')

router.post("/register", userControler.register);
router.post("/login", userControler.login);

module.exports = router;
