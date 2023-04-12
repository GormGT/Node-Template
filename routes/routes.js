const { Router } = require("express");
const controller = require("../controllers/controller");

// router
const router = Router();

// routes
router.get("/", controller.home_get);

router.get("/form", controller.form_get);

router.post("/form", controller.form_post);

router.post("/thing", controller.thing_readOne);

router.post("/updat", controller.doc_update);

router.post("/delet", controller.doc_delete);

module.exports = router;