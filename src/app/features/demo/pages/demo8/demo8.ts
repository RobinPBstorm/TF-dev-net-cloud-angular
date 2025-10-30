import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from './validators/password-match.validator';

@Component({
  selector: 'app-demo8',
  imports: [ReactiveFormsModule],
  templateUrl: './demo8.html',
  styleUrl: './demo8.scss',
})
export class Demo8 implements OnInit {

  private _formBuilder: FormBuilder = inject(FormBuilder);

  myForm!: FormGroup;
  phoneControl!: FormControl;

  ngOnInit(): void {
    this.phoneControl = new FormControl('', [Validators.pattern(/^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/)], []);

    this.myForm = this._formBuilder.group({
      lastname: new FormControl(null, [Validators.required, Validators.minLength(2)], []),
      firstname: ['Quentin', [Validators.required, Validators.maxLength(20)], []],
      email: ['quentin.geerts@bstorm.be', [Validators.required, Validators.email], []],
      password: [null, [Validators.required], []],
      confirmPassword: [null, [Validators.required], []],
      birthdate: ['1996-04-03', [Validators.required], []],
      sexe: ['man', [Validators.required], []],
      country: ['FR', [], []],
      phone: this.phoneControl
    }, { validators: [passwordMatchValidator] });

    // this.myForm.addControl('phone', this.phoneControl);

    console.log('this.myForm :>> ', this.myForm);
  }

  get lastname() {
    return this.myForm.controls['lastname'];
  }

  onSubmit() {

    console.log(this.myForm);

    if (this.myForm.invalid) return;

    console.log("Envoi du formulaire...");

  }

}
