import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
 
  constructor() { }

  

  passwordStrength(password:string):number {
    let result = 0;
    const number = /[0-9]/g;
    const letter = /[A-Za-z]/g;
    const symbol = /[^\w\s]/g;
    number.test(password ) ? result++ : result;
    letter.test(password ) ? result++ : result;
    symbol.test(password ) ? result++ : result;
    return result
  }
}
