import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/auth/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    this.loginForm = formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  logInFormHandler() {
    this.formSubmitted = true;

    if(this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(value => {
        console.log("Login successful");
      })
    }
  }
}
