import {Users as User} from "../models/Users";
import Bcrypt from 'bcryptjs'
import randtoken from 'rand-token'
import {Tokens} from "../models/Token";

class IndexController {

    test(req, res) {
        res.json({body: req.body})

    }



}


export {IndexController}