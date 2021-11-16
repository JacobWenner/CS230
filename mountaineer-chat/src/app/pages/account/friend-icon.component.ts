import { Component, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'friend-icon',
  templateUrl: 'friend-icon.component.html',
  styleUrls: ['./account.component.css'],
  template: '<h1>{{ (item | async)?.name }}</h1>'
})
export class FriendIconComponent {
  
  @Input()
  name!: string;
  @Input()
  status!: string;
  @Input()
  imagePath!: string;


  item: Observable<any>;
  constructor(db: AngularFireDatabase) {
    this.item = db.object('item').valueChanges();
    console.log(this.item);
  }





  
}
