"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signInLogin() {
        try {
            const payload = { username: '' };
            return {
                login_token: await this.jwtService.signAsync(payload),
            };
        }
        catch (error) {
            return error.response;
        }
    }
    async signIn(signInData) {
        try {
            const username = await this.usersService.findOne(signInData);
            if ((username === null || username === void 0 ? void 0 : username.password) !== signInData.passLogin) {
                return {
                    status: 401,
                    access_token: '',
                };
            }
            const payload = { username: signInData.userLogin, password: signInData.passLogin, role: username.role };
            return {
                status: 200,
                access_token: await this.jwtService.signAsync(payload),
            };
        }
        catch (error) {
            console.log(error);
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map