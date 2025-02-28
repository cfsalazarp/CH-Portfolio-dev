import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { trigger, transition, style, animate } from "@angular/animations";
import { SoftSkill } from "@app/core/models/softSkill.model";
import { SoftSkillsService } from "@app/core/services/soft-skills.service";
import { StrapiRichTextPipe } from '@app/pipes/strapi-rich-text.pipe';

@Component({
  selector: "app-soft-skills",
  imports: [CommonModule, StrapiRichTextPipe],
  templateUrl: "./soft-skills.component.html",
  styleUrl: "./soft-skills.component.scss",
  animations: [
    trigger("fadeInUp", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate(
          "{{delay}}ms ease-out",
          style({ opacity: 1, transform: "translateY(0)" })
        ),
      ]),
    ]),
  ],
})
export class SoftSkillsComponent {
  @Input() softSkills: SoftSkill[] = [];

  constructor(private softSkillService: SoftSkillsService){
  }

  ngOnInit() {
    console.log("ProjectsComponent: ngOnInit");
    this.softSkillService.getSoftSkills().subscribe((data) => {
      console.log("data: ", data);
      this.softSkills = data
        .map((skill: any) => {
          return {
            id: skill.id,
            name: skill.name,
            description: skill.description,
          };
        });

      console.log("this.projects", this.softSkills);
    });
  }
}
