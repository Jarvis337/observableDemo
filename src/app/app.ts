import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Obs } from './obs/obs';

// import { Obs4 } from './obs4/obs4';
// import { SubjectsObsFetch } from './subjects-obs-fetch';
import { NudgeBannerComponent } from './nudge-banner.component/nudge-banner.component';
import { CategoryOffersComponent } from './category.offers.component/category.offers.component';



@Component({
  selector: 'app-root',
  imports: [ NudgeBannerComponent, CategoryOffersComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('observableDemo');
}
