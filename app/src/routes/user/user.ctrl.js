"use strict";

const User = require("../../models/User");

const join = async (req, res) => {
    const user = new User(req.body);
    const result = await user.join();
    res.json(result)
}

const login = async (req, res) => {
    const user = new User(req.body);
    const result = await user.login();
    res.json(result)
}

const list = async (req, res) => {
    const user = new User();
    const result = await user.list();
    res.json(result)
}

module.exports = {
    join,
    login,
    list
}