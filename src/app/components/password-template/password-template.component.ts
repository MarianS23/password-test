import { Component, OnInit, forwardRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordStrengthService } from 'src/app/shared/services/password-strength.service';


@Component({
  selector: 'app-password-template',
  templateUrl: './password-template.component.html',
  styleUrls: ['./password-template.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordTemplateComponent),
    multi: true
  }]
})
export class PasswordTemplateComponent implements OnInit, ControlValueAccessor {
  public vision: boolean = false;
  
  public section1 = '';
  public section2 = '';
  public section3 = '';

  public passStrength!: FormGroup;
  public password = new FormControl();

  onTouch: any;
  
  constructor(
    private fb: FormBuilder,
    private passwordStrengthService: PasswordStrengthService
  ) { };


  writeValue(value: any): void {
    this.password.setValue(value)
  }
  registerOnChange(fn: any): void {
    this.checkPassword = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }


  ngOnInit(): void {
    this.password.valueChanges.subscribe((val) => {
      this.checkPassword(val);
    })
    this.initPassStrength();
  }


  initPassStrength() {
    this.passStrength = this.fb.group({
      password: ['']
    })
  }

  switchVision() {
    this.vision = !this.vision;
  }

  checkPassword(password: any) {
    if (password && password.length < 8) {
      this.section1 = 'red';
      this.section2 = 'red';
      this.section3 = 'red';
    } else if (password.length >= 8) {
      switch (this.passwordStrengthService.passwordStrength(password)) {
        case 1:
          this.section1 = 'red';
          this.section2 = '';
          this.section3 = '';
          break
        case 2:
          this.section1 = 'yellow';
          this.section2 = 'yellow';
          this.section3 = '';
          break
        case 3:
          this.section1 = 'green';
          this.section2 = 'green';
          this.section3 = 'green';
          break
      }
    } else {
      this.section1 = '';
      this.section2 = '';
      this.section3 = '';
    }
  }
}
