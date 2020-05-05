import {AuthController} from "../controllers/AuthController";


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(new AuthController().index());
});

module.exports = router;
