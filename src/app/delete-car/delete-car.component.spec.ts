import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCarComponent } from './delete-car.component';

describe('DeleteCarComponent', () => {
  let component: DeleteCarComponent;
  let fixture: ComponentFixture<DeleteCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
