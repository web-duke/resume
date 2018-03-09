import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalEnvironmentComponent } from './technical-environment.component';

describe('TechnicalEnvironmentComponent', () => {
  let component: TechnicalEnvironmentComponent;
  let fixture: ComponentFixture<TechnicalEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
