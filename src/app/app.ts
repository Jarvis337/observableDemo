import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Obs } from './obs/obs';
import { ObsFetchData } from './obs-fetch-data/obs-fetch-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Obs,ObsFetchData],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('observableDemo');
}
