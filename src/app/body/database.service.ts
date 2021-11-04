import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { UserInfo } from "./user-info.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    items: Observable<UserInfo []>
    constructor(private db:AngularFireDatabase){
        console.log("Getting data from database");
        this.items = this.db.list<UserInfo>('user-info').valueChanges();
        
    }

    public showData(){
        this.items.subscribe((data: UserInfo []) => {
            console.log("Data received");
            for (let item of data){
                console.log(item);
            }
        })
    }
}