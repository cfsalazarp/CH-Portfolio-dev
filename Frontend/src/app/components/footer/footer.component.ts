import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Social } from '@app/core/models/social.model';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

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
    
}
