import { Component } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-header",
  imports: [TranslateModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {}

  useLanguage(language: string, event: Event): void {
    event.preventDefault();
    console.log(`Changing language to ${language}`);

    this.translate.use(language ?? "es");
  }
}
