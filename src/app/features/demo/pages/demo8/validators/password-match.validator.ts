import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {

  // Attention, si le validator est mis sur un control => control = formControl
  // si le validator est mis sur le formulaire => control = formGroup

  if (!control.value.password || !control.value.confirmPassword) return null;

  if (control.value.password !== control.value.confirmPassword) {
    return { passwordMatch: false };
  }

  if (control.value.password.toLowerCase() === 'adam') {
    return { validData: 'Vous ne pouvez pas utiliser `' + control.value.password + '` comme mot de passe.' }
  }

  return null;

}