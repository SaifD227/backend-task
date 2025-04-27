"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
exports.userController = {
    // Create a new user
    async createUser(req, res) {
        try {
            const { name, email, password } = req.body;
            // Check if user already exists
            const existingUser = await prisma.user.findUnique({
                where: { email },
            });
            if (existingUser) {
                return res.status(400).json({ error: "User already exists" });
            }
            // Hash password
            const hashedPassword = await bcryptjs_1.default.hash(password, 10);
            // Create new user
            const user = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                },
            });
            // Remove password from response
            const { password: _ } = user, userWithoutPassword = __rest(user, ["password"]);
            res.status(201).json(userWithoutPassword);
        }
        catch (error) {
            res.status(500).json({ error: "Error creating user" });
        }
    },
    // Get user by ID
    async getUserById(req, res) {
        try {
            const { id } = req.params;
            const user = await prisma.user.findUnique({
                where: { id },
                select: {
                    id: true,
                    email: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            res.json(user);
        }
        catch (error) {
            res.status(500).json({ error: "Error fetching user" });
        }
    },
    // Update user
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            const user = await prisma.user.update({
                where: { id },
                data: {
                    email,
                },
                select: {
                    id: true,
                    email: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });
            res.json(user);
        }
        catch (error) {
            res.status(500).json({ error: "Error updating user" });
        }
    },
    // Delete user
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            await prisma.user.delete({
                where: { id },
            });
            res.json({ message: "User deleted successfully" });
        }
        catch (error) {
            res.status(500).json({ error: "Error deleting user" });
        }
    },
    // Get all users
    async getAllUsers(req, res) {
        try {
            const users = await prisma.user.findMany({
                select: {
                    id: true,
                    email: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });
            res.json(users);
        }
        catch (error) {
            res.status(500).json({ error: "Error fetching users" });
        }
    },
};
//# sourceMappingURL=userController.js.map