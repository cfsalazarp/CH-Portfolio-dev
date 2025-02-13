import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxTerminalComponent } from './linux-terminal.component';

describe('LinuxTerminalComponent', () => {
  let component: LinuxTerminalComponent;
  let fixture: ComponentFixture<LinuxTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxTerminalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinuxTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
