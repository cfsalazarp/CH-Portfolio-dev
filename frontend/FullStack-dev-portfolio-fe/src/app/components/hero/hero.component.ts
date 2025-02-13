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
  profileDescription: string = '';
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.profileDescription = this.translate.currentLang === 'es' ? "$ echo 'Desarrollador apasionado por la tecnología y la programación.'" :
    "$ echo 'Developer passionate about technology and programming.'";
  }

  useLanguage(language: string): void {
    this.translate.use(language ?? 'es');
  }
}
