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
exports.RetailService = void 0;
const common_1 = require("@nestjs/common");
const types_1 = require("./types");
const axios_1 = require("axios");
const class_transformer_1 = require("class-transformer");
require('dotenv').config();
let RetailService = class RetailService {
    constructor() {
        this.axios = axios_1.default.create({
            baseURL: `${process.env.RETAIL_URL}/api/v5`,
            timeout: 10000,
            headers: {
                'x-api-key': process.env.RETAIL_KEY
            },
        });
        this.axios.interceptors.request.use((config) => {
            return config;
        });
        this.axios.interceptors.response.use((r) => {
            return r;
        }, (r) => {
            return r;
        });
    }
    async orders(filter) {
        const resp = await this.axios.get('/orders?page=' + filter);
        if (!resp.data)
            throw new Error('RETAIL CRM ERROR');
        const orders = class_transformer_1.plainToClass(types_1.Order, resp.data.orders);
        const pagination = resp.data.pagination;
        return [orders, pagination];
    }
    async findOrder(id) {
        const resp = await this.axios.get('/orders/' + id + '?site=demo-magazin&by=id');
        if (!resp.data)
            throw new Error('RETAIL CRM ERROR');
        const order = class_transformer_1.plainToClass(types_1.Order, resp.data.order);
        return order;
    }
    async orderStatuses() {
        const resp = await this.axios.get('/reference/statuses');
        if (!resp.data)
            throw new Error('RETAIL CRM ERROR');
        const orderStatuses = Object.values(resp.data.statuses);
        return orderStatuses;
    }
    async productStatuses() {
        const resp = await this.axios.get('/reference/product-statuses');
        if (!resp.data)
            throw new Error('RETAIL CRM ERROR');
        const productStatuses = Object.values(resp.data.productStatuses);
        return productStatuses;
    }
    async deliveryTypes() {
        const resp = await this.axios.get('/reference/delivery-types');
        if (!resp.data)
            throw new Error('RETAIL CRM ERROR');
        const deliveryTypes = Object.values(resp.data.deliveryTypes);
        return deliveryTypes;
    }
};
RetailService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], RetailService);
exports.RetailService = RetailService;
//# sourceMappingURL=retail.service.js.map