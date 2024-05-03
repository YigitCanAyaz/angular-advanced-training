import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-advanced-training';
  baseUrl: string = environment.baseUrl;
  smsKey: string = environment.smsKey;

  ngOnInit() {
    console.log(environment);
  }
}
