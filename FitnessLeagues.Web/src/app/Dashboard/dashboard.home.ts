import { Component } from '@angular/core';

@Component({
    selector: 'dashboard-home',
    template: `
      <h1>
        Welcome to {{title}}!!
      </h1>
    `,
    styles: []
  })

export class DashboardHomeComponent {
    title = 'Fitness Leagues Home';
  }
  