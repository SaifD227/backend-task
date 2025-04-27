"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
// User routes
router.post('/users', userController_1.userController.createUser);
router.get('/users', userController_1.userController.getAllUsers);
router.get('/users/:id', userController_1.userController.getUserById);
router.put('/users/:id', userController_1.userController.updateUser);
router.delete('/users/:id', userController_1.userController.deleteUser);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map