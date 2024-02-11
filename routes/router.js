const {GeneratenewshortURL,redirecttoOriginalPage,Analytics,allusers,api,all} = require("../controllers/control");

const express = require("express");

const router = express.Router();

router.get("/",allusers)

router.post("/",GeneratenewshortURL);

router.get("/api",api)

router.get("/all",all)


router.get("/analytics/:shortid",Analytics)


router.get("/:shortid",redirecttoOriginalPage)




module.exports = router;