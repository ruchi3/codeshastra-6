import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpModelComponent } from './sign-up-model.component';

describe('SignUpModelComponent', () => {
  let component: SignUpModelComponent;
  let fixture: ComponentFixture<SignUpModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
