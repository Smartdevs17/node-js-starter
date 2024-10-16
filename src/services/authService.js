
module.exports = class AuthService {
    constructor() {
        this.users = [];
    }

    async register(user) {
        this.users.push(user);
        console.log(this.users);
        return user;
    }

    async login(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        if (user) {
            return user;
        }
        return null;
    }

    async logout(email) {
        const user = this.users.find(u => u.email === email);
        if (user) {
            return user;
        }
        return null;
    }

    async getUser(email) {
        const user = this.users.find(u => u.email === email);
        if (user) {
            return user;
        }
        return null;
    }
}