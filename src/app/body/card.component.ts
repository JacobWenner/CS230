import { Component, Input } from "@angular/core";

@Component({
    selector: 'card',
    templateUrl:'card.component.html',
    styleUrls: ['card.component.css']
})

export class CardComponent{
    @Input()
    title! : string;
    @Input()
    price! : string;
    @Input()
    imagePath! : string;
    @Input()
    size!: string;
    @Input()
    display!: string;
    @Input()
    gps!: string;
    @Input()
    gpsCellular!: string;
    @Input()
    ecg!: string;
    @Input()
    heartRate!: string;
    @Input()
    familySetup!: string;
    @Input()
    waterResistance!: string;
    
}