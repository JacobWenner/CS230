import { AngularFireDatabase} from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class StatusService{

  item: Observable<any> | any;

  constructor(private db: AngularFireDatabase){

  }

  getData():Observable<any>{
      this.item = this.db.object('/users/dan0016/status').valueChanges();
      return this.item;
  }


  





  
}
