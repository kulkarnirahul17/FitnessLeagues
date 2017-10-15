import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class FitbitLoginService {
    _httpClient: HttpClient;

    constructor(public httpClient: HttpClient)
    {
        this._httpClient = httpClient;
    }

    login(): string {
        var data = this._httpClient.get("https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=228PXF&redirect_uri=http%3A%2F%2Flocalhost%3A59695&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800")
        .subscribe(data => {
            alert(JSON.stringify(data));
        });
        return "Logged in through service";
    }
}