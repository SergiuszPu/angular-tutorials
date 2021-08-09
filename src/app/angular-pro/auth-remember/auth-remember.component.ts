import { Component, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'auth-remember',
    templateUrl: './auth-remember.component.html',
    styleUrls: ['./auth-remember.component.scss']
})

export class AuthRememberComponent {

    @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

    // Here I add Event like type and "as HTMLInputElement" to TypeScript see this element
    onChecked(value: Event) {
        this.checked.emit((value.target as HTMLInputElement).checked)
    }
}