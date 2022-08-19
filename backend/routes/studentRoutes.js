const router = require("express").Router();
const userControler = require('../controllers/studentControlers');
// const studentimageuploadcontroler = require('../controllers/studentimageuploadcontroler')




router.post('/register', userControler.register)
router.post('/login', userControler.login)
// router.put('/info/:id', userControler.saveinfo)
// router.get('/student/:id', userControler.getUser)
// router.post('/changep', userControler.changep)
// router.delete('/delectacc/:id', userControler.delectacc)
// router.post('/image' , studentimageuploadcontroler.uploadimage)



module.exports  =  router