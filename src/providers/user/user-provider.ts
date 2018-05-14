import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CoreProvider} from "../core/core-provider";
import {User} from "../../models/User";
import {Storage} from "@ionic/storage";
import {userConstants} from "../../app/constants";

@Injectable()
export class UserProvider extends CoreProvider {

    constructor(public http: HttpClient, private storage: Storage) {
        super(http);
    }


    register(user: User) {
        return this.postRequest(`${this.apiRoot}` + '/users/register', user, User)
            .then(res => Promise.resolve(res))
            .catch(e => Promise.reject(e))
    }

}