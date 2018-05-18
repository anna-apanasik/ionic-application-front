import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { AuthenticationProvider } from "../providers/authentication/authentication";
import { HttpRequest } from "@angular/common/http/src/request";
import { HttpEvent } from "@angular/common/http/src/response";
import { Observable } from "rxjs/Observable";
import { HttpHandler } from "@angular/common/http/src/backend";
import { NoTokenURL } from "../app/constants";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private auth: AuthenticationProvider) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
        if(this.auth.getToken() && !request.url.indexOf(NoTokenURL.login) && !request.url.indexOf(NoTokenURL.register)) {
            request = request.clone({
                setHeaders: {
                    Authorization : `Bearer ${this.auth.getToken()}`
                }
            });
        }

        return next.handle(request);
    }
}