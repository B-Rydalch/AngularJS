// completed; last edited 4/13/17

import { Component } from '@angular/core';
import { UserComponent } from '../userComponent/user.component';

@Component({
    moduleId: module.id,    // needed for templateUrl
    selector: 'edit',
    templateUrl: 'edit.component.html',
    styleUrls:  [ 'edit.component.css' ] 
})

export class EditComponent {
    name: string ;
    email: string;
    address: address;
    edited: boolean; 

    constructor() {
        console.log("editComponet initialized");
        this.name = ''; 
        this.email = '',
        this.address = {
            street:'',
            city: '',
            state: ''
        }
        this.edited = false;
    } 

    hasValue(passedString : String) {
        if(passedString != null){
            this.edited = true; 
        }
    }

    toggleEditor() {
        console.log("toggle" + this.edited);
        if(this.edited == true){
             this.edited = false;
        } else{
            this.edited = true;
        }
    }
}// end of Export 

// interface needed for address object
interface address {
    street: string; 
    city: string; 
    state: string;
}