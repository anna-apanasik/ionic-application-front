import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./TokenInterceptor";
import { HeaderInterceptor } from "./HeaderInterceptor";

export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HeaderInterceptor,
        multi: true
    }
];