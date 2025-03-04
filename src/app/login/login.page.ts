import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, CommonModule, FormsModule]
})
export class LoginPage {

  inUser: string = "";
  inPassword: string = "";

  private Us = "Beta";
  private Pass = "OscarUser";
  constructor(private router: Router) {}

  login() {
    if (this.inUser === this.Us && this.inPassword === this.Pass) {
      alert("Inicio de sesión exitoso ✅");
      this.router.navigate(['service']);

    } else {
      alert("Usuario o contraseña incorrectos")
    }
  }

}
