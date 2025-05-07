import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, 
  ],
  template: `<router-outlet></router-outlet>`,
})
 export class AppComponent {
   title = 'frontend';
 }

export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
}
