"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const list_item_controller_1 = require("./list-item/list-item.controller");
const list_item_service_1 = require("./list-item/list-item.service");
const list_item_entity_1 = require("../entities/list-item.entity");
const users_entity_1 = require("../entities/users.entity");
const users_service_1 = require("./users/users.service");
const users_controller_1 = require("./users/users.controller");
let ModuModule = class ModuModule {
};
ModuModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([list_item_entity_1.ListItem, users_entity_1.Users]),
        ],
        controllers: [list_item_controller_1.ListItemController, users_controller_1.UsersController],
        providers: [list_item_service_1.ListItemService, users_service_1.UsersService]
    })
], ModuModule);
exports.ModuModule = ModuModule;
//# sourceMappingURL=modu.module.js.map