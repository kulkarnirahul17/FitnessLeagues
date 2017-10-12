import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="bg-primary text-white" style="border-left: 3em">
      <h1>
        Welcome to {{title}}!!      
      </h1>
      <dashboard-home></dashboard-home>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Fitness Leagues';
}
