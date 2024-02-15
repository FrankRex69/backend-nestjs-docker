"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateListItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_list_item_dto_1 = require("./create-list-item.dto");
class UpdateListItemDto extends swagger_1.PartialType(create_list_item_dto_1.CreateListItemDto) {
}
exports.UpdateListItemDto = UpdateListItemDto;
//# sourceMappingURL=update-list-item.dto.js.map