import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GlobalService } from "src/app/core/services/global.service";
import { ApiRequest } from "src/app/core/services/request.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(model) {
    let url = environment.serviceBaseUrl;
    return this.http.post(`${url}login`, model);
  }
}
