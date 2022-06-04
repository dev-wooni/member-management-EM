"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./user.ctrl");

// 라우터 설정
router.post("/join", ctrl.join);
router.post("/login", ctrl.login);
router.get("/list", ctrl.list);

module.exports = router;