import {Tokens} from "../models/Token";

const authMiddleware = (req, res, next) => (req.body.token) ? checkToken(req.body.token,res, next) : res.json({status: false, mess: "token not found"})

const checkToken = (token, res, next) => new Tokens().findOne({token: token}, (not, user) => (user) ? next() : res.json({status: false, mess: "token expired"}))


export { authMiddleware }