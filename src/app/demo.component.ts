import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class DemoComponent {
  title = 'app';

  constructor() {
    console.log('hello git');
  }
}
