const UserStorage = require("./UserStorage")

class User {
    constructor(body) {
        this.body = body;
    }

    async join() {
        const { email, password, name } = this.body;
        const joinInfo = { email, password, name }
        const result = await UserStorage.join(joinInfo);
        return result;
    }

    async login() {
        const { email, password } = this.body;
        const loginInfo = { email, password }
        const result = await UserStorage.login(loginInfo);
        return result;
    }

    async list() {
        const result = await UserStorage.list();
        return result;
    }
}

module.exports = User;
