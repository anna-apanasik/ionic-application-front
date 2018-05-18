import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { userConstants } from "../../app/constants";

@Injectable()
export class AuthenticationProvider {
    private token: string;

    constructor(private storage: Storage) {
        this._setTokenFromStore();
    }

    public getToken(): string {
        return this.token;
    }

    public setToken(token: string) {
        this.storage.set(userConstants.AUTH_USER_HEADER_KEY, token).then();
        this.token = token;
    }

    private  _setTokenFromStore() {
       this.storage.get(userConstants.AUTH_USER_HEADER_KEY)
           .then(token => this.token = token)
    }
}
