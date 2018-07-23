// completed; last edited: 4/14/17
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        \n        <!-- enter new tabs here -->\n    <ul class=\"header\">\n       <li><img src=\"/images/avercast_logo(2).png\" alt=\"Avercast Logo\" style=\"width:140px;height:60px;\"></li>\n       <li><a routerLink=\"/\"><i class=\"fa fa-home fa-2x\">  Home</i></a></li>\n       <li style=\"float:right\"><a routerLink=\"/about\"><i class=\"fa fa-address-book  fa-2x\">  About</i></a></li>\n       <li><a routerLink=\"/edit\"><i class=\"fa fa-pencil-square-o fa-2x\">Edit</i></a></li>\n       <li><a routerLink=\"/posts\"><i class=\"fa fa-bell-o fa-2x\">Posts</i></a></li>\n       <li><a routerLink=\"/graph\"><i class=\"fa fa-bar-chart fa-2x\" aria-hidden=\"true\">Graph</i></a></li>\n    </ul>\n    <hr />\n\n    <!--used for dynamic URL-->\n    <router-outlet></router-outlet>\n   "
    })
], AppComponent);
exports.AppComponent = AppComponent;
// SUGGESTED TUTORIALS
// angular 2 in 60 min " https://www.youtube.com/watch?v=-zW1zHqsdyc" (includes:routing,services,components, modules)
// font-awesome tutorial "https://www.youtube.com/watch?v=qXXeguRe1Y4"(good to learn how to import libraries)
// nodejs introduction "https://www.youtube.com/watch?v=RxGBkDCNPPk"
// SUGGESTED SITES FOR DOCUMENTATION
// icon images "http://fontawesome.io/"
// lots of material "https://www.primefaces.org/"
// chars "http://www.chartjs.org/"
//# sourceMappingURL=app.component.js.map