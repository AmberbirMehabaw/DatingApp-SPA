import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailValueComponent } from './detail-value.component';

describe('DetailValueComponent', () => {
  let component: DetailValueComponent;
  let fixture: ComponentFixture<DetailValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
