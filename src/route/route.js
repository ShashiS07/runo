const { Router } = require('express')
const router = Router()
const userController = require('../Controller/userController')
const centerController = require("../Controller/centerController")


router.post("/registor", userController.createUser)

router.post("/login", userController.login)

router.post("/center", centerController.createCenter)

router.get("/center", centerController.getCenter)

router.post("/user/:userId", userController.registerSlot)


module.exports = router