import {Injectable} from "@angular/core";
import {UserResponse} from "./UserResponse";

@Injectable()
export class User {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    middleName: string;


    constructor(userResponse?: UserResponse) {
        if(userResponse) {
            this.id = userResponse.id;
            this.firstName = userResponse.fullName.firstName;
            this.lastName = userResponse.fullName.lastName;
            this.middleName = userResponse.fullName.middleName;
        }
    }
}

