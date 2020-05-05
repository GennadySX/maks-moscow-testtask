import {get, put, post, router, del} from "../config/router";
import {AuthController} from "../controllers/AuthController";



/* GET home page. */
get("/", new AuthController().index)

post('/login', new AuthController().login)
post('/register', new AuthController().register)

module.exports = router;

