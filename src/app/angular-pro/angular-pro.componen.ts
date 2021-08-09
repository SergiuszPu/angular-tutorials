import { Component } from "@angular/core";

@Component({
    selector: 'todd-motto',
    templateUrl: 'angular-pro.component.html',
    styleUrls: ['./angular-pro.component.scss']
})

export class AngularProComponent {
    remember: boolean = false

    onChecked(value: boolean) {
        this.remember = value
    }

    userAccount(data: any) {
        console.log(data);
    }

    userLogin(login: any) {
        console.log('User is Logged', login, this.remember);
    }


    // next lesson is ViewChild and template #ref
}