import { Component } from "@angular/core";
import { UserInfo } from "./user-info.model";
import { DataService } from "./data.service";

@Component({
    selector: 'account',
    templateUrl:'account.component.html',
    styleUrls: ['account.component.css']

})
export class AccountComponent{

    constructor (private dataService: DataService){

    }
  
    onAdd(data: UserInfo){
        console.log("Button was pressed")
        console.log(data)
        this.dataService.addUserInfo(data).subscribe(data =>{
            console.log("Works")
        });
    }

}