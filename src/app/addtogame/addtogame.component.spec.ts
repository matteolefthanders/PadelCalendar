import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtogameComponent } from './addtogame.component';

describe('AddtogameComponent', () => {
  let component: AddtogameComponent;
  let fixture: ComponentFixture<AddtogameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtogameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
