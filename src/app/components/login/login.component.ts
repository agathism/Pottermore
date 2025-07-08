import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user-service';
import { CommonModule } from '@angular/common';
// Pour ce login j'ai la meme démarche que celui du register

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup; 
  formBuilder: FormBuilder = inject(FormBuilder);
  userService: UserService = inject(UserService);

  constructor () {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  monFormEstSoumis() {
    // Je vérifie si le formulaire est valide
    // Si oui, je peux envoyer la requête à l'API
    if (this.loginForm.valid) {
      console.log(
        "Form valide je peux envoyer la requete de login a l'api /auth"
      );
      // J'appel de la méthode du service
      const { email, password } = this.loginForm.value;
      this.userService.login({ email, password }).subscribe({
        next: (data: any) => {
          // Je récupère du token
          console.log(data);

          // Je stock le token en localStorage seulement s'il existe
          if (data && data.token) {
            localStorage.setItem('authToken', data.token);
          } else {
        error: (error: any) => {
          if (error && error.error && error.error.message) {
            console.log(error.error.message);
          } else {
            console.log('An unknown error occurred during login.', error);
          }
        }
      };
    }
  })
}}}
