const AuthService = require('../services/authService');

module.exports = class AuthController {
    
    async register(req, res) {
        const authService = new AuthService();
        const user = await authService.register(req.body);
        res.status(201).json(user);
    }

    async login(req, res) {
        const authService = new AuthService();
        const user = await authService.login(req.body);
        res.status(200).json(user);
    }

    async logout(req, res) {
        const authService = new AuthService();
        const user = await authService.logout(req.params.id);
        res.status(200).json(user);
    }

    async getUser(req, res) {
        const authService = new AuthService();
        const user = await authService.getUser(req.params.email);
        res.status(200).json(user);
    }
}