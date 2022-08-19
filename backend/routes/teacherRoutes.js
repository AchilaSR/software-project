const router = require("express").Router();
const userControler = require('../controllers/teacherControlers');
// const teacherimageuploadcontroler = require('../controllers/teacherimageuploadcontroler')
// const notificationcontroler = require('../controllers/teachernotificationControlers')
 
  

  router.post('/register', userControler.register)
  router.post('/login', userControler.login)
//   router.put('/info/:id', userControler.saveinfo)
//   router.get('/teacher/:id', userControler.getUser)
//   router.post('/changep', userControler.changep)
//   router.delete('/delectacc/:id', userControler.delectacc)
//   router.post('/image' , teacherimageuploadcontroler.uploadimage)
//   router.get('/all' , userControler.getallusers)

//   //notification
//   router.post('/noti' , notificationcontroler.sendnoti)
//   router.get('/getnoti/:id' , notificationcontroler.getnoti)
//   router.delete('/deletenoti/:id' , notificationcontroler.deletemeeting)


  module.exports  =  router