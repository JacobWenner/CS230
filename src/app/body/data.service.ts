import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "./cards.model";

@Injectable({providedIn: 'root'})
export class DataService {

    private baseUrl: string = 'https://apple-b9dd1-default-rtdb.firebaseio.com/watch_compare.json';
    constructor(private http:HttpClient){
    }

    getWatch() {
       return this.http.get<Card>(this.baseUrl);
    }

}