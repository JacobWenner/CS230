import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css'],
})
export class AccountLoginComponent {
  authSwitch = 'login';
  constructor(public auth: AngularFireAuth) {}
  create(data: NgForm) {
    this.auth.createUserWithEmailAndPassword(
      data.value.email,
      data.value.password
    );
    console.log(this.auth.user);
    data.resetForm();
  }
  login(data: NgForm) {
    this.auth.signInWithEmailAndPassword(data.value.email, data.value.password);
    data.resetForm();
  }
  logout() {
    console.log(this.auth.user);
    this.auth.signOut();
  }
}
