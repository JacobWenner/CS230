import {Component, Input} from "@angular/core"

@Component({
    selector: "friend-icon",
    templateUrl:"friend-icon.component.html",
    styleUrls: ['./account.component.css']
})

export class FriendIconComponent{
        @Input() 
        name! :string;
        @Input() 
        status! :string;
        @Input() 
        imagePath! :string;
}