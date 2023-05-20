import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCarComponent } from './show-car.component';

describe('ShowCarComponent', () => {
  let component: ShowCarComponent;
  let fixture: ComponentFixture<ShowCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
