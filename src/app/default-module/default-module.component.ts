import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TestingStore } from '../stores/testing.store';

interface IFormData {
  fullName: string;
  email: string;
}

@Component({
  selector: 'app-default-module',
  templateUrl: './default-module.component.html',
  styleUrls: ['./default-module.component.scss']
})
export class DefaultModuleComponent implements OnInit {

  form: any;

  fullName: string = '';
  email: string = '';

  constructor(
    private formBuilder: FormBuilder,
    public testingStore: TestingStore
  ) {
    this.testingStore.getData();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    }, {
      validators: ConfirmedValidator('password', 'confirmPassword')
    });
  }

  txtFullnameChanged(event: any) {
    const value = event.target.value;
    this.fullName = value;
  }

  formSubmitted(formData: IFormData) {
    const { fullName, email } = formData;

  }
}

export function ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}