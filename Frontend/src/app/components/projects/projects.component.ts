import { Component } from "@angular/core";
import { ProjectsService } from "@app/core/services/projects.service";
import { Project } from "@app/core/models/projectCard.model";
import { environment } from "../../environments/environment";
import { ProjectCardComponent } from "../project-card/project-card.component";
import { CommonModule } from "@angular/common";
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({
  selector: "app-projects",
  imports: [CommonModule, ProjectCardComponent, SlickCarouselModule],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  projects: Array<Project> = [
    {
      id: 2,
      title: "E-Factor",
      description: [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Desarrollo de interfaz para la gestión y creación de facturas electrónicas en Colombia. Conexión con API ",
              "type": "text"
            },
            {
              "url": "https://www.factus.com.co/",
              "type": "link",
              "children": [
                {
                  "text": "FACTUS",
                  "type": "text"
                }
              ]
            },
            {
              "text": ", creada por los cracks de ",
              "type": "text"
            },
            {
              "url": "https://halltec.co/inicio",
              "type": "link",
              "children": [
                {
                  "text": "Halltech",
                  "type": "text"
                }
              ]
            },
            {
              "text": ". ",
              "type": "text"
            }
          ]
        }
      ],
      repo_url: "https://github.com/cfsalazarp/E-factor",
      live_url: "",
      image: "https://res.cloudinary.com/dkc2tbb4g/image/upload/v1739757256/Captura_desde_2025_02_16_20_54_02_2f075d7945.png",
      technologies: ["Angular", "Strapi", "Java"],
    },
    {
      id: 2,
      title: "Portafolio",
      description: [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "Construido con ",
              "type": "text"
            },
            {
              "bold": true,
              "text": "Angular 19",
              "type": "text"
            },
            {
              "text": " y ",
              "type": "text"
            },
            {
              "bold": true,
              "text": "Standalone Components",
              "type": "text"
            },
            {
              "text": ", combinando modularidad y rendimiento. Usa ",
              "type": "text"
            },
            {
              "bold": true,
              "text": "NgRx",
              "type": "text"
            },
            {
              "text": ", ",
              "type": "text"
            },
            {
              "bold": true,
              "text": "RxJS",
              "type": "text"
            },
            {
              "text": " y ",
              "type": "text"
            },
            {
              "bold": true,
              "text": "Tailwind CSS",
              "type": "text"
            },
            {
              "text": " para una experiencia ágil y dinámica, junto con una API en ",
              "type": "text"
            },
            {
              "bold": true,
              "text": "Strapi",
              "type": "text"
            },
            {
              "text": " para la gestión de contenido. 🚀",
              "type": "text"
            }
          ]
        }
      ],
      repo_url: "https://github.com/cfsalazarp/CH-Portfolio-dev",
      live_url: "https://ch-portfolio-dev.netlify.app/",
      image: "https://res.cloudinary.com/dkc2tbb4g/image/upload/v1739752497/Captura_desde_2025_02_16_06_34_38_bb3626c08c.png",
      technologies: ["HTML5", "CSS3", "Javascript"],
    },
    {
      id: 2,
      title: "PlatziWordle",
      description: [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "🚀 Convierte temperaturas entre Celsius, Fahrenheit y Kelvin en un par de clics, con una interfaz fluida y moderna. Usamos standalone components y signals para reactividad. ¡Súper ligera, eficiente y lista para correr en cualquier navegador! 🔥❄️",
              "type": "text"
            }
          ]
        }
      ],
      repo_url: "https://github.com/cfsalazarp/CH-Portfolio-dev",
      live_url: "https://ch-portfolio-dev.netlify.app/",
      image: "https://res.cloudinary.com/dkc2tbb4g/image/upload/v1739757145/Platzi_Wordle_8533df3124.png",
      technologies: ["Angular", "Springboot", "Oracle"],
    },
  ];
  constructor(private projectsService: ProjectsService) {}

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 3000,
    "pauseOnHover": true,
    "dots": true,
    "arrows": true,
    "responsive": [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  ngOnInit() {
    console.log("ProjectsComponent: ngOnInit");
    // this.projectsService.getProjects().subscribe((data) => {
    //   console.log("data: ", data)
    //   this.projects = data.map((project: any) => {
    //     return {
    //       id: project.id,
    //       title: project.title,
    //       description: project.description,
    //       repo_url: project.repo_url,
    //       live_url: project.live_url,
    //       image: project.image != null ? `${environment.STRAPI_HOST}${project.image.url}` : null,
    //       technologies: project.technologies.map((technology: any) => technology.name)
    //     }
    //   }).sort((a: Project, b: Project) => a.id - b.id);
    // });
  }

  
}
