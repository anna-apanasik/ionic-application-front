import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreProvider } from "../core/core-provider";
import { User } from "../../models/User";
import { AuthenticationProvider } from "../authentication/authentication";

@Injectable()
export class UserProvider extends CoreProvider {

    constructor(public http: HttpClient, private authenticationProvider: AuthenticationProvider) {
        super(http);
    }


    register(user: User) {
        return this.postRequest( '/users/register', user, User)
            .then(res => Promise.resolve(res))
            .catch(e => Promise.reject(e))
    }

    login(email: string, password: string) {
        return this.postRequest('/login', {email, password})
            .then(res => {
                this.authenticationProvider.setToken(res.token);
                return Promise.resolve();
            })
            .catch(e => Promise.reject(e))
    }
}