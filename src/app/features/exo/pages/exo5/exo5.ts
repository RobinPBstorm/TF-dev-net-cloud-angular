import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { minAgeValidator } from './validators/min-age.validator';

@Component({
  selector: 'app-exo5',
  imports: [ReactiveFormsModule],
  templateUrl: './exo5.html',
  styleUrl: './exo5.scss',
})
export class Exo5 implements OnInit {

  private _fb: FormBuilder = inject(FormBuilder);

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this._fb.group({
      birthdate: [null, [Validators.required, minAgeValidator(18)]]
    });
  }

  onSubmit(): void {

  }


}
