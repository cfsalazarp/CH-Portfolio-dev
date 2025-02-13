import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-linux-terminal',
  imports: [],
  templateUrl: './linux-terminal.component.html',
  styleUrl: './linux-terminal.component.scss',
})
export class LinuxTerminalComponent {
  @Input() text: string = '';
  displayedText: string = '';
  private index = 0;

  ngOnInit() {
    this.typeEffect();
  }

  private typeEffect() {
    if (this.index < this.text.length) {
      this.displayedText += this.text[this.index];
      this.index++;
      setTimeout(() => this.typeEffect(), 50);
    }
  }
}
