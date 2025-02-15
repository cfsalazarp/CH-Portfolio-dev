import { Component } from '@angular/core';
import { LinuxTerminalComponent } from '../linux-terminal/linux-terminal.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Social } from '@app/core/models/social.model';
import { SocialService } from '@app/core/services/social.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [LinuxTerminalComponent, TranslateModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  profileDescription: string = '';
  socialLinks: Social[] = [];

  constructor(
    private translate: TranslateService,
    private socialService: SocialService
  ) { }

  ngOnInit(): void {
    this.socialService.getSocialLinks().subscribe(data => {
      console.log("Obtiene data: ", data);
      this.socialLinks = data;
    });
  }

  ngOnChange(): void {
    this.profileDescription = this.translate.instant('hero.description');
  }

  // useLanguage(language: string): void {
  //   this.translate.use(language ?? 'es');
  // }
  
}
