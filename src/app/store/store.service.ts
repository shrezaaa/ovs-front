import { Injectable } from '@angular/core';
import { GlobalService } from '../core/services/global.service';
import { ApiRequest } from '../core/services/request.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private gs: GlobalService) {}

  getProducts(model){
    return ApiRequest("GET", true)
    .controller("productList")
    .addParams(model)
    .call(this.gs);
  }

  getUsers(){
    return ApiRequest("GET", true)
    .controller("userList")
    .call(this.gs);
  }
}
