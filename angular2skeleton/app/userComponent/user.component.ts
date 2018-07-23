// completed; last edited 4/13/17

import { Component } from '@angular/core';
import {  Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
})

export class UserComponent { 
    name: string ;
    email: string;
    address: address;
    hobbits: string[]; 
    showHobbits: boolean; 

    constructor() {
        console.log("userComponent initialized");
        this.name = 'Lil Bilbo'; 
        this.email = 'bilbo@shire.brew',
        this.address = {
            street:'123 hobbit hole',
            city: 'Shire',
            state: 'Middle Earth'
        }
        this.hobbits = ['Frodo', 'Sam wise',' other dude'];
        this.showHobbits = false; 
       
    }

    toggleHobbits(){
        if(this.showHobbits == true){
             this.showHobbits = false;
        } else{
            this.showHobbits = true;
        }
    }

    addHobbit(hobbits){
        this.hobbits.push(hobbits);
    }

    deleteHobbit(i){
        this.hobbits.splice(i,1);
    }
}// end userComponent

interface address {
    street: string; 
    city: string; 
    state: string;
}
