import {Component} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private updates: SwUpdate) {
    this.updates.available.subscribe(() => {
      alert('New version available!');
      this.updates.activateUpdate()
        .then(() => alert('Activate update succeeded'));
    });

    this.updates.activated.subscribe(() => {
      alert('New version activated!');
    });
  }
}
