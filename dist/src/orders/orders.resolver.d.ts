import { RetailService } from '../retail_api/retail.service';
import { OrdersResponse } from '../graphql';
import { Order, OrdersFilter } from 'src/retail_api/types';
export declare class OrdersResolver {
    private retailService;
    constructor(retailService: RetailService);
    getOrders(filter?: OrdersFilter): Promise<OrdersResponse>;
    order(id: string): Promise<Order>;
}
