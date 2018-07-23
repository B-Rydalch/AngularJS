// not complete still needs work 4/14/17

import { Component } from "@angular/core"; 

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent {
  //  private: username: string
  //  private: password: string

    public login(): void {
        alert("I'm in login");
    }
}

