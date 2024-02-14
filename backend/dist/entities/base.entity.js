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
exports.NumberIdEntity = exports.BaseEntity = void 0;
const base_interface_1 = require("../commons/interfaces/base.interface");
const typeorm_1 = require("typeorm");
class BaseEntity {
}
__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ name: 'updated_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "deletedAt", void 0);
exports.BaseEntity = BaseEntity;
class NumberIdEntity extends BaseEntity {
}
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], NumberIdEntity.prototype, "id", void 0);
exports.NumberIdEntity = NumberIdEntity;
//# sourceMappingURL=base.entity.js.map