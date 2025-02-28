import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { Education } from '@app/core/models/education.model';
import { EducationService } from '@app/core/services/education.service';
import { StrapiRichTextPipe } from '@app/pipes/strapi-rich-text.pipe';

@Component({
  selector: 'app-education',
  imports: [CommonModule, StrapiRichTextPipe],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('{{ delay }}ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ], { params: { delay: 0 } })
    ])
  ],
})
export class EducationComponent {
  @Input() educations: Education[] = [];

  constructor(private educationService: EducationService) {}
  
    ngOnInit() {
      console.log("ProjectsComponent: ngOnInit");
      this.educationService.getEducations().subscribe((data) => {
        console.log("data: ", data);
        this.educations = data.map((education: any) => {
          return {
            institution: education.institution,
            degree: education.degree,
            description: education.description,
            start_date: education.start_date,
            end_date: education.end_date,
          };
        });
  
        console.log("this.educations", this.educations);
      });
    }
}
