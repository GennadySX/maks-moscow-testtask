import {get, put, post, router, del} from "../config/router";
import {AuthController} from "../controllers/AuthController";

post('login', new AuthController().login)
post('register', new AuthController().login)

/* GET home page. */
get("/", new AuthController().index)



module.exports = router;

