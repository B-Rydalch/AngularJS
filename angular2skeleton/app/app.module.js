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
var platform_browser_1 = require("@angular/platform-browser"); // needed for browser
var forms_1 = require("@angular/forms"); // needed for forms tags 
var http_1 = require("@angular/http"); // requests for http json files 
// add component here everytime one is made  
// and don't forget to add it todeclarations 
var app_component_1 = require("./app.component");
var user_component_1 = require("./userComponent/user.component");
var about_component_1 = require("./aboutComponent/about.component");
var edit_component_1 = require("./editComponent/edit.component");
var posts_component_1 = require("./postsComponent/posts.component");
var graph_component_1 = require("./graphComponent/graph.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.routing /*, ChartModule*/],
        declarations: [app_component_1.AppComponent, user_component_1.UserComponent, about_component_1.AboutComponent,
            edit_component_1.EditComponent, posts_component_1.PostsComponent, graph_component_1.GraphComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map