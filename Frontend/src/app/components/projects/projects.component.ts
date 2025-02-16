import { Component } from '@angular/core';
import { ProjectsService } from '@app/core/services/projects.service';
import { Project } from '@app/core/models/projectCard.model';
import { environment } from '../../environments/environment';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: Array<Project> = [];
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    console.log("ProjectsComponent: ngOnInit");    
    this.projectsService.getProjects().subscribe((data) => {   
      console.log("data: ", data)
      this.projects = data.map((project: any) => {
        return {
          id: project.id,
          title: project.title,
          description: project.description,
          repo_url: project.repo_url,
          live_url: project.live_url,
          image: project.image != null ? `${environment.STRAPI_HOST}${project.image.url}` : null,
          technologies: project.technologies.map((technology: any) => technology.name)
        }
      }).sort((a: Project, b: Project) => a.id - b.id);      
    });
  }


}
