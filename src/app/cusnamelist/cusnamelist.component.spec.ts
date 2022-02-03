import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusnamelistComponent } from './cusnamelist.component';

describe('CusnamelistComponent', () => {
  let component: CusnamelistComponent;
  let fixture: ComponentFixture<CusnamelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusnamelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusnamelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
