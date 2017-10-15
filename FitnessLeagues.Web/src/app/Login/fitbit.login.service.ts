import { Injectable } from "@angular/core";

@Injectable()

export class FitbitLoginService{
    login(): string {
        return "Logged in through service";
    }
}