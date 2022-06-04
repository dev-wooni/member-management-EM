const pool = require("../config/pool");

class UserStorage {
    static async join(joinInfo) {
        let conn, row;
        try {
            conn = await pool.getConnection();
            const query = "INSERT INTO user(email, password, name) VALUES(?, ?, ?)";
            row = await conn.query(query, [joinInfo.email, joinInfo.password, joinInfo.name]);
        } catch (err) {
            throw(err);
        } finally {
            if (conn) conn.end();
            if (row?.affectedRows === 1) return { successcode: 1 };
            return { successcode: -1 };
        }
    }

    static async login(loginInfo) {
        let conn, row;
        try {
            conn = await pool.getConnection();
            const query = "SELECT idx, email, name FROM user WHERE email=? AND password=?";
            row = await conn.query(query, [loginInfo.email, loginInfo.password]);
        } catch (err) {
            throw(err);
        } finally {
            if (conn) conn.end();
            const { idx=0, email='', password='' } = row[0];
            if (idx > 0) return { successcode: 1 };
            return { successcode: -1 };
        }
    }

    static async list() {
        let conn, row;
        try {
            conn = await pool.getConnection();
            const query = "SELECT idx, email, name FROM user ORDER BY idx ASC";
            row = await conn.query(query);
        } catch (err) {
            throw(err);
        } finally {
            if (conn) conn.end();
            if (row?.length > 1) {
                const list = row.filter(r => r?.idx > 0);
                return list;
            }
            return { successcode: -1 };
        }
    }
}

module.exports = UserStorage;
