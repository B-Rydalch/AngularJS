// completed; last edited: 4/14/17

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        
        <!-- enter new tabs here -->
    <ul class="header">
       <li><img src="/images/avercast_logo(2).png" alt="Avercast Logo" style="width:140px;height:60px;"></li>
       <li><a routerLink="/"><i class="fa fa-home fa-2x">  Home</i></a></li>
       <li style="float:right"><a routerLink="/about"><i class="fa fa-address-book  fa-2x">  About</i></a></li>
       <li><a routerLink="/edit"><i class="fa fa-pencil-square-o fa-2x">Edit</i></a></li>
       <li><a routerLink="/posts"><i class="fa fa-bell-o fa-2x">Posts</i></a></li>
       <li><a routerLink="/graph"><i class="fa fa-bar-chart fa-2x" aria-hidden="true">Graph</i></a></li>
    </ul>
    <hr />

    <!--used for dynamic URL-->
    <router-outlet></router-outlet>
   `
})
export class AppComponent {}

// SUGGESTED TUTORIALS
// angular 2 in 60 min " https://www.youtube.com/watch?v=-zW1zHqsdyc" (includes:routing,services,components, modules)
// font-awesome tutorial "https://www.youtube.com/watch?v=qXXeguRe1Y4"(good to learn how to import libraries)
// nodejs introduction "https://www.youtube.com/watch?v=RxGBkDCNPPk"


// SUGGESTED SITES FOR DOCUMENTATION
// icon images "http://fontawesome.io/"
// lots of material "https://www.primefaces.org/"
// chars "http://www.chartjs.org/"

