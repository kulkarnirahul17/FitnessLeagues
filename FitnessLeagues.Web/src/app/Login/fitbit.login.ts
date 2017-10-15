import { Component } from '@angular/core';
import { FitbitLoginService } from "./fitbit.login.service";

@Component({
    selector: 'fitbit-login',
    providers: [FitbitLoginService],
    templateUrl: 'fitbit.login.html',
    styles: []
  })

export class FitbitLoginComponent {
   private _fitbitLoginService: FitbitLoginService;
    constructor(public fitbitLoginService: FitbitLoginService) {
      this._fitbitLoginService = fitbitLoginService;
    }

    login(): void{
      alert(this._fitbitLoginService.login());
    }
  }
  