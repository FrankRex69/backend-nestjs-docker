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
exports.ListItemController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_list_item_dto_1 = require("./dto/create-list-item.dto");
const update_list_item_dto_1 = require("./dto/update-list-item.dto");
const list_item_interface_1 = require("../../commons/interfaces/list-item.interface");
const list_item_service_1 = require("./list-item.service");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const users_interface_1 = require("../../commons/interfaces/users.interface");
let ListItemController = class ListItemController {
    async findAll() {
        return await this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    create(dto) {
        return this.service.create(dto);
    }
    update(id, dto) {
        return this.service.update(id, dto);
    }
    remove(id) {
        return this.service.remove(id);
    }
};
__decorate([
    common_1.Inject(list_item_service_1.ListItemService),
    __metadata("design:type", list_item_service_1.ListItemService)
], ListItemController.prototype, "service", void 0);
__decorate([
    common_1.Get(),
    swagger_1.ApiBearerAuth('access-token'),
    common_1.UseGuards(roles_guard_1.RoleGuard),
    roles_decorator_1.Roles(users_interface_1.Role.Admin),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ListItemController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiBearerAuth('access-token'),
    common_1.UseGuards(roles_guard_1.RoleGuard),
    roles_decorator_1.Roles(users_interface_1.Role.Admin),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ListItemController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiBearerAuth('access-token'),
    common_1.UseGuards(roles_guard_1.RoleGuard),
    roles_decorator_1.Roles(users_interface_1.Role.Admin),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_list_item_dto_1.CreateListItemDto]),
    __metadata("design:returntype", Promise)
], ListItemController.prototype, "create", null);
__decorate([
    common_1.Patch(':id'),
    swagger_1.ApiBearerAuth('access-token'),
    common_1.UseGuards(roles_guard_1.RoleGuard),
    roles_decorator_1.Roles(users_interface_1.Role.Admin),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_list_item_dto_1.UpdateListItemDto]),
    __metadata("design:returntype", Promise)
], ListItemController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiBearerAuth('access-token'),
    common_1.UseGuards(roles_guard_1.RoleGuard),
    roles_decorator_1.Roles(users_interface_1.Role.Admin),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ListItemController.prototype, "remove", null);
ListItemController = __decorate([
    swagger_1.ApiTags('List Item'),
    common_1.Controller('list-item')
], ListItemController);
exports.ListItemController = ListItemController;
//# sourceMappingURL=list-item.controller.js.map