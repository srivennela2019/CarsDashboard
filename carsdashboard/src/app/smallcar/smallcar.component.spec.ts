import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallcarComponent } from './smallcar.component';

describe('SmallcarComponent', () => {
  let component: SmallcarComponent;
  let fixture: ComponentFixture<SmallcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallcarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
