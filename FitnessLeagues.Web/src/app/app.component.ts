import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{title}}!!
      <dashboard-home></dashboard-home>
    </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'Fitness Leagues';
}
