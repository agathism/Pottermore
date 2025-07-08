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

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {

  registerForm: FormGroup;
  formBuilder: FormBuilder = inject(FormBuilder);
  userService: UserService = inject(UserService);

  constructor() {
    this.registerForm = this.formBuilder.group({
      // Définition des contrôles du formulaire avec leurs validations
      firstname: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      billingAddress: ['', [Validators.required]],
      birthDate: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }

  registerSoumis() {
    if (this.registerForm.valid) {
      console.log(
        "Form valide je peux envoyer la requete de register a l'api/users"
      );
      // J'appel de la méthode du service
      const { email, password, firstName, name, billingAddress, birthDate } = this.registerForm.value;
      this.userService.register({ email, password, firstName, name, billingAddress, birthDate }).subscribe({
        next: (data: any) => {
          // Je récupère le token
          console.log('Données reçues:', data);

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
    }
  }
}
