import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpacexLauncesComponent } from './spacex-launces/spacex-launces.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpacexLauncesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spacex';
}
