import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordTemplateComponent } from './password-template.component';

describe('PasswordTemplateComponent', () => {
  let component: PasswordTemplateComponent;
  let fixture: ComponentFixture<PasswordTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordTemplateComponent]
    });
    fixture = TestBed.createComponent(PasswordTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
