import { Api } from './api';
import { Customer } from './customer';
import { CacheCustomerApi } from './decoratorApi/cacheCustomerApi';
import { CustomerApi } from './decoratorApi/customerApi';
import { EncryptedCustomerApi } from './decoratorApi/encryptedCustomerApi';

describe('[Decorator - lab] Build Response', () => {
  it('should build response', () => {
    // given
    const api = new CustomerApi();

    // when
    const customer: Customer = api.get();

    // then
    expect(customer.name).toBe('John');
  });

  it('should return customer object from cache', () => {
    // given
    const api: Api = new CustomerApi();
    const cacheApi: Api = new CacheCustomerApi(api);
    // when
    const customer: Customer = cacheApi.get();

    // then
    expect(customer.isCached).toBe(true);
  });

  it('should return encrypted customer object', () => {
    const api: Api = new CustomerApi();
    const encryptedApi = new EncryptedCustomerApi(api);
    const customer: Customer = encryptedApi.get();

    expect(customer.name).toEqual('encrypted - John');
    expect(customer.lastName).toEqual('encrypted - Doe');
    expect(customer.isCached).toBe(false);
  });

  it('should return encryped customer from cache', () => {
    const api: Api = new CustomerApi();
    const cacheApi: Api = new CacheCustomerApi(api);
    const encryptedApi = new EncryptedCustomerApi(cacheApi);
    const customer: Customer = encryptedApi.get();

    expect(customer.name).toEqual('encrypted - John');
    expect(customer.lastName).toEqual('encrypted - Doe');
    expect(customer.isCached).toBe(true);
  })
});
