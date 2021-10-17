import {Component, Input} from "@angular/core"

@Component({
    selector: "chat-icon",
    templateUrl:"chat-icon.component.html",
    styleUrls: ['./account.component.css']
})

export class ChatIconComponent{
        @Input() 
        name! :string;
        @Input() 
        imagePath! :string;
}