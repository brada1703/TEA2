import { Component } from '@angular/core';
import { LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'pronunciation';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  constructor(private localize: LocalizeRouterService) {}
  changeLanguage(lang: string) {
    this.localize.changeLanguage(lang);
  }
}
