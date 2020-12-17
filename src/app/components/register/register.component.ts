import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserValidators} from 'src/app/common/validators/user.validators';
import {AppError} from '../../common/errors/app-error';
import {UserService} from '../../services/user.service';
import {HandelError} from '../../common/errors/handelError';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  constructor(private service: UserService){
  }

  countries = ['Sweden', 'Denmark', 'Norway', 'Finland', 'US', 'UK'];
  isError = false;
  isRegistered = false;
  errorMessage: string | undefined = '';

  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)]),
    country: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(3)]),
    birthDate: new FormControl('', [
      Validators.required]),
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
  }

  get firstName(): any {
    return this.form.get('firstName');
  }

  get lastName(): any {
    return this.form.get('lastName');
  }

  get country(): any {
    return this.form.get('country');
  }
  get email(): any {
    return this.form.get('email');
  }

  get password(): any {
    return this.form.get('password');
  }

  get mobileNumber(): any {
    return this.form.get('mobileNumber');
  }

  get birthDate(): any {
    return this.form.get('birthDate');
  }

  submitForm(formData: any): any {
    this.createUser(formData.value);
  }

  createUser(input: HTMLInputElement): void {
    const user: any = input;

    this.service.create(JSON.stringify(user))
      .subscribe((newUser: any) => {
        user.id = newUser.id;
        this.errorMessage = '';
        this.isError = false;
        this.isRegistered = true;
      }, (error: AppError) => {
        this.errorMessage = HandelError.printErrorMessage(error);
        this.isError = HandelError.getIsErrorFlag();
      });
  }
}
