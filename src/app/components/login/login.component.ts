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
import {User} from '../../models/user.interface';
// Pour ce llogin j'ai la meme démarche que celui du register

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  inputPWType: string = 'password';
  loginForm: FormGroup; 
  formBuilder: FormBuilder = inject(FormBuilder);
  userService: UserService = inject(UserService);

  constructor () {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  togglePW() {
    if (this.inputPWType === 'password') {
      this.inputPWType = 'text';
    } else {
      this.inputPWType = 'password';
    }
  }

  monFormEstSoumis() {

    // Tout comme les autres étapes j'ai suivi ton code. J'ai plus confiance car j'ai compris beaucoup plus.
    // Faire les choses à la main m'a persis de comprendre plus facilement.

    if (this.loginForm.valid) {
      console.log(
        "Form valide je peux envoyer la requete de login a l'api /auth"
      );
      // J'appel de la méthode du service
      this.userService.login(this.loginForm.value).subscribe({
        next: (data: any) => {

          // Je récupère du token
          console.log(data);

          // Je stock le token en localStorage
          localStorage.setItem('authToken', data.token);
        },
        error: (error) => {
          console.log(error.error.message);
        },
      });
    }
  }
}
