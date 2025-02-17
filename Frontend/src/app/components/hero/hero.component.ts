import { Component } from '@angular/core';
import { LinuxTerminalComponent } from '../linux-terminal/linux-terminal.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Social } from '@app/core/models/social.model';
import { SocialService } from '@app/core/services/social.service';
import { CommonModule } from '@angular/common';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-hero',
  imports: [LinuxTerminalComponent, TranslateModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  profileDescription: string = "$ echo 'Convierto ideas en interfaces fluidas con Angular y optimizo la experiencia con RxJS y NgRx. Colaboro con equipos de backend y UX para crear productos escalables y eficientes. Me encanta resolver problemas y construir soluciones que realmente funcionan.' > about.ts";
  socialLinks: Social[] = [
    {
      id: 1,
      name: 'GitHub',
      slug: 'github',
      url: 'https://github.com/cfsalazarp',
    },
    {
      id: 2,
      name: 'LinkedIn',
      slug: 'linkedin',
      url: 'https://www.linkedin.com/in/cfsalazarp/',
    },
    {
      id: 3,
      name: 'Correo',
      slug: 'mail',
      url: 'mailto:christiansalazar1129@gmail.com',
    }
  ];
  environment = environment;

  constructor(
    private translate: TranslateService,
    private socialService: SocialService
  ) { }

  ngOnInit(): void {
    this.loadTranslation();
    this.socialService.getSocialLinks().subscribe(data => {
      this.socialLinks = data;
    });
  }

  ngOnChange(): void {
    this.loadTranslation();
    this.profileDescription = this.translate.instant('hero.description');
  }
  
  private loadTranslation(): void {
    this.translate.get('hero.description').subscribe((translatedText: string) => {
      this.profileDescription = translatedText;
    });
  }
}
