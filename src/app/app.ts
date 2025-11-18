import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Obs } from './obs/obs';
import { ObsFetchData } from './obs-fetch-data/obs-fetch-data';
import { Obs4 } from './obs4/obs4';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Obs,ObsFetchData, Obs4],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('observableDemo');
}
