import { Component } from '@angular/core';

@Component({
  selector: 'app-cv-selector',
  imports: [],
  templateUrl: './cv-selector.component.html',
  styleUrl: './cv-selector.component.scss'
})
export class CvSelectorComponent {

  cvLinks: { [key: string]: string } = {
    es: 'assets/docs/Cv_ChristianSalazar-ES.pdf',
    en: 'assets/docs/Cv_ChristianSalazar-EN.pdf'
  };

  openCV(e: Event) {
    const selectElement = e.target as HTMLSelectElement;
    const language = selectElement.value
    if (language && this.cvLinks[language]) {
      window.open(this.cvLinks[language], '_blank');
    }
    selectElement.value = '';
  }
}
