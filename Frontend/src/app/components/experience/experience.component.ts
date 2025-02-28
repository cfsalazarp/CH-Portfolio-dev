import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { trigger, transition, style, animate } from "@angular/animations";
import { Experience } from "@app/core/models/experience.model";
import { ExperienceService } from "@app/core/services/experience.service";
import { StrapiRichTextPipe } from "@app/pipes/strapi-rich-text.pipe";

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule, StrapiRichTextPipe],
  templateUrl: "./experience.component.html",
  styleUrl: "./experience.component.scss",
  animations: [
    trigger("fadeInUp", [
      transition(
        ":enter",
        [
          style({ opacity: 0, transform: "translateY(20px)" }),
          animate(
            "{{ delay }}ms ease-out",
            style({ opacity: 1, transform: "translateY(0)" })
          ),
        ],
        { params: { delay: 0 } }
      ),
    ]),
  ],
})
export class ExperienceComponent {
  @Input() experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    console.log("ProjectsComponent: ngOnInit");
    this.experienceService.getExperiences().subscribe((data) => {
      console.log("data: ", data);
      this.experiences = data.map((experience: any) => {
        return {
          id: experience.id,
          role: experience.role,
          company: experience.company,
          description: experience.description,
          start_date: experience.start_date,
          end_date: experience.end_date,
          current: experience.current,
        };
      });

      console.log("this.experiences", this.experiences);
    });
  }
}
