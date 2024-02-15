"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const modu_module_1 = require("./modu/modu.module");
const auth_module_1 = require("./modu/auth/auth.module");
const dotenv = require("dotenv");
const users_module_1 = require("./modu/users/users.module");
dotenv.config();
console.log(process.env.DB_HOST);
const _ = {
    DB_HOST: process.env.PG_HOST,
    DB_PORT: process.env.PG_PORT,
    DB_DB: process.env.PG_DB,
    DB_SCHEMA: process.env.PG_SCHEMA,
    DB_USER: process.env.PG_USER,
    DB_PASSWORD: process.env.PG_PASSWORD,
};
console.log('DB_HOST: ' + _.DB_HOST);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            auth_module_1.AuthModule,
            modu_module_1.ModuModule,
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'postgresbase',
                port: Number.parseInt(_.DB_PORT),
                database: _.DB_DB,
                username: _.DB_USER,
                password: _.DB_PASSWORD,
                schema: _.DB_SCHEMA,
                entities: [],
                synchronize: true,
                autoLoadEntities: true,
                logging: true,
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map