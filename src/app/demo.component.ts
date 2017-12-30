import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class DemoComponent {
  title = 'app';

 abc() {
      console.log('dsdsdsds');
  }
  constructor() {
    console.log('hello sddsds git');
    console.log('abcdsdsdsds');
  }
}
