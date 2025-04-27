"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.findUserByEmail = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
const createUser = async (email, password) => {
    const hashedPassword = await bcryptjs_1.default.hash(password, 10);
    return prisma.user.create({
        data: {
            email,
            password: hashedPassword
        }
    });
};
exports.createUser = createUser;
const findUserByEmail = async (email) => {
    return prisma.user.findUnique({
        where: { email }
    });
};
exports.findUserByEmail = findUserByEmail;
const comparePassword = async (plainPassword, hashedPassword) => {
    return bcryptjs_1.default.compare(plainPassword, hashedPassword);
};
exports.comparePassword = comparePassword;
//# sourceMappingURL=User.js.map