import {get, put, post, router, del} from "../config/router";
import {AuthController} from "../controllers/AuthController";

/* GET home page. */


post('login')


get("/", new AuthController().index)



module.exports = router;

