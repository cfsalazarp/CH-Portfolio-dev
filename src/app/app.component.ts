import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from "./components/header/header.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeroComponent } from "./components/hero/hero.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TranslateModule, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isBrowser: boolean;
  private animationFrameId: number | null = null;
  private cursorX = 0;
  private cursorY = 0;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      document.addEventListener('mousemove', this.handleMouseMove);
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      document.removeEventListener('mousemove', this.handleMouseMove);
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
    }
  }

  private handleMouseMove = (event: MouseEvent) => {
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;

    if (!this.animationFrameId) {
      this.animationFrameId = requestAnimationFrame(() => this.updateAura());
    }
  };

  private updateAura() {
    document.documentElement.style.setProperty('--x', `${this.cursorX}px`);
    document.documentElement.style.setProperty('--y', `${this.cursorY}px`);
    this.animationFrameId = null;
  }
}
