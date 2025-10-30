import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function minAgeValidator(minAge: number = 18): ValidatorFn {
  return (control: AbstractControl<any, any, any>): ValidationErrors | null => {

    console.log('control.value :>> ', control.value);

    if (!control.value) return null;

    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    const birthdate = new Date(control.value + 'T00:00:00');

    console.log('today :>> ', today);
    console.log('birthdate :>> ', birthdate);

    const age = (today.getTime() - birthdate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

    console.log('age :>> ', age);

    if (Math.floor(age) < minAge) return { minAge: {
      requiredAge: minAge,
      currentAge: Math.floor(age)
    } };

    return null;

  };
}