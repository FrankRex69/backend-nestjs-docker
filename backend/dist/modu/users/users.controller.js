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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const users_interface_1 = require("../../commons/interfaces/users.interface");
const create_users_dto_1 = require("./dto/create-users.dto");
const users_service_1 = require("./users.service");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const users_interface_2 = require("../../commons/interfaces/users.interface");
let UsersController = class UsersController {
    async findAll() {
        return await this.service.findAll();
    }
    create(dto) {
        return this.service.create(dto);
    }
};
__decorate([
    common_1.Inject(users_service_1.UsersService),
    __metadata("design:type", users_service_1.UsersService)
], UsersController.prototype, "service", void 0);
__decorate([
    common_1.Get(),
    swagger_1.ApiBearerAuth('access-token'),
    common_1.UseGuards(roles_guard_1.RoleGuard),
    roles_decorator_1.Roles(users_interface_2.Role.Admin),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiBearerAuth('access-token'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_users_dto_1.CreateUsersDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
UsersController = __decorate([
    swagger_1.ApiTags('Users'),
    common_1.Controller('users')
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map