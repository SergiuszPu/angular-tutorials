import { Component, EventEmitter, Output, ContentChild, AfterContentInit, ContentChildren, QueryList, ViewChild, AfterViewInit, ElementRef, Renderer2 } from "@angular/core";
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component'

interface User {
    email: string,
    passwor: string,
}

@Component({
    selector: 'form-content',
    templateUrl: 'form-content.component.html',
    styleUrls: ['./form-content.component.scss']
})

export class FormContentComponent implements AfterContentInit, AfterViewInit {

    showMessage: boolean = false;

    constructor( private renderer: Renderer2){}
    //@ContentChild give us reference to the childe component and we can use property to doing something
    // @ContentChild(AuthRememberComponent) remember?: AuthRememberComponent;

    // ngAfterContentInit() {
    //     if (this.remember) {
    //         this.remember.checked.subscribe((checked:boolean) => this.showMessage = checked)
    //     }
    // }

    //@contentChildren and QueryList give as menu option to modify output value: forEach, map itp.
    @ContentChildren(AuthRememberComponent) remember?: QueryList<AuthRememberComponent>

    @ViewChild('email') email?: ElementRef

    @ViewChild(AuthMessageComponent) message?: AuthMessageComponent;

    ngAfterViewInit() {
            // Renderer2 wykorzystujemy z ElementRef
        this.renderer.setAttribute(this.email?.nativeElement, 'placeholder', 'Enter Your email address');
    //  this.email?.nativeElement.setAttribute('placeholder', 'Enter Your email address');
    //  this.email?.nativeElement.classList.add('email');
    //  this.email?.nativeElement.focus();
     
    }

    ngAfterContentInit() {
        if (this.message) {
            this.message.days = 8
        }
        if (this.remember) {

            this.remember.forEach((item) => {
                item.checked.subscribe((el: boolean) => this.showMessage = el)
            })

        }
    }

    @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

    onSubmit(form: User) {
        this.submitted.emit(form)
    }


}