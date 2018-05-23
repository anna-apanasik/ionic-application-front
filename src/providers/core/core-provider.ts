import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorResponse } from "../../models/ErrorResponse";

@Injectable()
export class CoreProvider {
    apiRoot: string = 'http://template.docker/api';
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(public http: HttpClient) {

    }

    postRequest(url: string, data: any | null, responseType?: any, httpOptions: {} = this.httpOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.apiRoot}` + url, data, httpOptions)
                .subscribe(res => {
                        resolve(responseType ? this._convertResponseToType(res, responseType) : res);
                    },
                    error => {
                        reject(this._convertBadResponse(error))
                    })
        });
    }

    getRequest(url: string, responseType?: any, httpOptions: {} = this.httpOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(`${this.apiRoot}` + url, httpOptions)
                .subscribe(res => {
                        resolve(this._convertResponseToType(res, responseType));
                    },
                    error => {
                        reject(this._convertBadResponse(error))
                    })
        });
    }

    patchRequest(url: string, data: any, responseType?: any, httpOptions: {} = this.httpOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.patch(`${this.apiRoot}` + url, data, httpOptions)
                .subscribe(res => {
                        resolve(this._convertResponseToType(res, responseType));
                    },
                    error => {
                        reject(this._convertBadResponse(error))
                    })
        });
    }

    deleteRequest(url: string, httpOptions: {} = this.httpOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.delete(`${this.apiRoot}` + url, httpOptions)
                .subscribe(res => {
                        resolve(res);
                    },
                    error => {
                        reject(this._convertBadResponse(error))
                    })
        });
    }

    private _convertResponseToType(response, type) {
        if (!Array.isArray(response)) {
            return new type(response);
        }

        return response.map(item => new type(item));
    }

    private _convertBadResponse(response): ErrorResponse {
        return {
            title: response.statusText,
            message: response.error.message,
            errors: response.error.errors,
            statusCode: response.status,
            url: response.url
        };
    }
}
