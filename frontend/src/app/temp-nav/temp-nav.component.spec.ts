import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempNavComponent } from './temp-nav.component';

describe('TempNavComponent', () => {
  let component: TempNavComponent;
  let fixture: ComponentFixture<TempNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
