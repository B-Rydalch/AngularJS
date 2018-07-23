// completed; last edited 4/13/17
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserComponent = (function () {
    function UserComponent() {
        console.log("userComponent initialized");
        this.name = 'Lil Bilbo';
        this.email = 'bilbo@shire.brew',
            this.address = {
                street: '123 hobbit hole',
                city: 'Shire',
                state: 'Middle Earth'
            };
        this.hobbits = ['Frodo', 'Sam wise', ' other dude'];
        this.showHobbits = false;
    }
    UserComponent.prototype.toggleHobbits = function () {
        if (this.showHobbits == true) {
            this.showHobbits = false;
        }
        else {
            this.showHobbits = true;
        }
    };
    UserComponent.prototype.addHobbit = function (hobbits) {
        this.hobbits.push(hobbits);
    };
    UserComponent.prototype.deleteHobbit = function (i) {
        this.hobbits.splice(i, 1);
    };
    return UserComponent;
}()); // end userComponent
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user',
        templateUrl: 'user.component.html',
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map