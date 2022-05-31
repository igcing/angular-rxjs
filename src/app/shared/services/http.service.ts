import { HttpInterface } from '@apps/shared/services/http.interface';
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ApiResponse} from "@apps/shared/models/ApiResponse";
import {Observable} from "rxjs";

@Injectable()
export class HttpService implements HttpInterface {

    constructor(private http: HttpClient) {
    }

    public get(url: string, params: any): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(url + '?' + params);
    }

    public post(url: string, body: any) {
        return this.http.post(url, body);
    }
}
