import {get, put, post, router, del} from "../config/router";
import {AuthController} from "../controllers/AuthController";

/* GET home page. */
get("/profile", new AuthController().user)
get("/get_all", new AuthController().getAll)



module.exports = router;

