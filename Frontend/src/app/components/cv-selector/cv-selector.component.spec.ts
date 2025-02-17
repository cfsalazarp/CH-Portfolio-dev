import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSelectorComponent } from './cv-selector.component';

describe('CvSelectorComponent', () => {
  let component: CvSelectorComponent;
  let fixture: ComponentFixture<CvSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
