const router = require("express").Router();
const userControler = require("../controllers/teacherControlers");
// const teacherimageuploadcontroler = require('../controllers/teacherimageuploadcontroler')
// const notificationcontroler = require('../controllers/teachernotificationControlers')

router.post("/register", userControler.register);
router.post("/login", userControler.login);

module.exports = router;
