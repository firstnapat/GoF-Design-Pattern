import { Customer } from "../customer";
import { Api } from "../api";

export class CacheCustomerApi implements Api {
    private customerApi: Api;
    private cacheCustomer: Customer | undefined;

    constructor(customerApi: Api){
        this.customerApi = customerApi;
    }
    get(): Customer {
        if (!this.cacheCustomer) {
            this.cacheCustomer = this.customerApi.get();
            this.cacheCustomer.isCached = true;
        }
        return this.cacheCustomer;
    }
}