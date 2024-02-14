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
exports.ListItemService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const list_item_entity_1 = require("../../entities/list-item.entity");
let ListItemService = class ListItemService {
    constructor(repository) {
        this.repository = repository;
    }
    findAll() {
        return this.repository.find({
            order: {
                id: "ASC"
            }
        });
    }
    findOne(id) {
        return this.repository.findOne({ where: { id: id } });
    }
    async create(dto) {
        return this.repository.save(dto);
    }
    async update(id, dto) {
        const listItem = await this.repository.findOne({ where: { id: id } });
        if (!listItem) {
            throw new common_1.NotFoundException(`ListItem #${id} not found`);
        }
        return await this.repository.save(Object.assign(Object.assign({}, listItem), dto));
    }
    async remove(id) {
        const listItem = await this.repository.findOne({ where: { id: id } });
        if (!listItem) {
            throw new common_1.NotFoundException(`Commission #${id} not found`);
        }
        return await this.repository.softRemove(listItem);
    }
};
ListItemService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(list_item_entity_1.ListItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ListItemService);
exports.ListItemService = ListItemService;
//# sourceMappingURL=list-item.service.js.map