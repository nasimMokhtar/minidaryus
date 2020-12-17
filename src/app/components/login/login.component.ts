import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserValidators} from '../../common/validators/user.validators';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {AppError} from '../../common/errors/app-error';
import {NotFoundError} from '../../common/errors/not-found-error';
import {BadInput} from '../../common/errors/bad-input';
import {HandelError} from '../../common/errors/handelError';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  invalidLogin = false;
  isError = false;
  errorMessage: string | undefined = '';
  constructor(private router: Router, private authService: AuthService) { }
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      UserValidators.CannotContainSpace
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UserValidators.CannotContainSpace
    ])
  });
  ngOnInit(): void {
    if (localStorage.getItem('token') && localStorage.getItem('token') !== '') {
      this.router.navigate(['/home']);
    }
  }

  get email(): any {
    return this.form.get('email');
  }

  get password(): any {
    return this.form.get('password');
  }

  signIn(credentials: any): any {
      this.authService.login(credentials.value)
        .subscribe((result: any) => {
          if (result && result[0].token){
            localStorage.setItem('token', result[0].token);
            localStorage.setItem('firstName', result[0].user.firstName);
            localStorage.setItem('lastName', result[0].user.lastName);
            this.router.navigate(['/home']);
          } else {
            this.invalidLogin = true;
          }
        }, (error: AppError) => {
          this.errorMessage = HandelError.printErrorMessage(error);
          this.isError = HandelError.getIsErrorFlag();
        });
  }
}
