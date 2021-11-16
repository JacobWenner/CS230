import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css'],
})
export class AccountLoginComponent {
  constructor(public auth: AngularFireAuth) {}
  login(data: NgForm) {
    this.auth.signInWithEmailAndPassword(data.value.email, data.value.password);
    console.log(this.auth.user);
    data.resetForm();
  }
  logout() {
    console.log(this.auth.user);
    this.auth.signOut();
  }
}
