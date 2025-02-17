import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '@app/core/models/projectCard.model';
import { StrapiRichTextPipe } from '@app/pipes/strapi-rich-text.pipe';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule, StrapiRichTextPipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  
  ngOnInit() {
    console.log("ProjectCardComponent: ngOnInit");
    console.log("project: ", this.project);
  }

  openLink(a: string){
    window.open(a, '_blank');
  }
}
