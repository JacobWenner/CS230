import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "./cards.model";
import { UserInfo } from "./user-info.model";

@Injectable({providedIn: 'root'})
export class DataService {

    private baseUrl: string = 'https://apple-b9dd1-default-rtdb.firebaseio.com/watch_compare.json';
    private Url2: string = 'https://apple-b9dd1-default-rtdb.firebaseio.com/user-info.json';
    
    constructor(private http:HttpClient){
    }

    getWatch() {
       return this.http.get<Card>(this.baseUrl);
    }

    addUserInfo(data: UserInfo) {

        return this.http.put(this.Url2, data);

    }

}