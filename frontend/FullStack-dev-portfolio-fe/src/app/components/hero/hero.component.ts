import { Component } from '@angular/core';
import { LinuxTerminalComponent } from '../linux-terminal/linux-terminal.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [LinuxTerminalComponent, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  constructor(private translate: TranslateService) {}
  terminalText: string =
    "$ echo 'Desarrollador apasionado por la tecnología y la programación.'";

  useLanguage(language: string): void {
    this.translate.use(language ?? 'es');
  }
}
