import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  login(model) {
    let url = environment.serviceBaseUrl;
    // return this.http.post(`${url}login`, model);
  }
}
