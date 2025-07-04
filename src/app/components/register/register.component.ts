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

// Pour ce register je vais utiliser l'api du coliving car celui du Potterhead ne ppossède pas d'interface User. 
// C'est la même chose que celui de l'api du co-living mais j'ai bien pris le temps de lire chaque ligne 
// et de les comprendre. J'ai pris des notes sur les difféntes étapes et le formulaire me parait pplus claire

export class RegisterComponent {

  registerForm: FormGroup;
  formBuilder: FormBuilder = inject(FormBuilder);
  userService: UserService = inject(UserService);

  constructor() {
    this.registerForm = this.formBuilder.group({
      // J'avais mi Validators.firstName mais j'avais une erreur car elle n'existe pas dans Validators, pareil pour billingAddres et birthDate
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
