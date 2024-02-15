"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const express_1 = require("express");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    app.use(express_1.urlencoded({ extended: true, limit: '50mb' }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('BASE API')
        .setDescription('Chat Operativa API')
        .setVersion('1.0')
        .addBearerAuth({
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header'
    }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/swagger', app, document, {
        swaggerOptions: {
            security: [{ 'JWT': [] }],
        },
    });
    const port = 7000;
    app.listen(port, function () {
        console.log("qwerty.");
        console.log(`http://localhost:${port}/api/swagger`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map