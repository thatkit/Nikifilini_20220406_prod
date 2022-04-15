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
const retail_service_1 = require("./retail_api/retail.service");
const graphql_1 = require("@nestjs/graphql");
const orders_module_1 = require("./orders/orders.module");
const reference_module_1 = require("./reference/reference.module");
const serve_static_1 = require("@nestjs/serve-static");
const { join } = require('path');
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                typePaths: ['./**/*.graphql'],
                definitions: {
                    path: join(process.cwd(), 'src/graphql.ts'),
                },
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: join(__dirname, '..', '..', 'build')
            }),
            orders_module_1.OrdersModule,
            reference_module_1.ReferenceModule,
        ],
        providers: [retail_service_1.RetailService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map