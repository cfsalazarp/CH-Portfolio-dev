import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { HeroComponent } from "./components/hero/hero.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  imports: [
    HeaderComponent,
    TranslateModule,
    HeroComponent,
    ProjectsComponent,
    FooterComponent
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {

  constructor(
    private translate: TranslateService,
  ) {
    this.translate.addLangs(["en", "es"]);
    this.translate.setDefaultLang("es");
    this.translate.use("es");
  }

}
