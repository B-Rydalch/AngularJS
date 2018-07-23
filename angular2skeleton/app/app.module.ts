// completed; last edited: 4/14/17

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // needed for browser
import { FormsModule } from '@angular/forms';// needed for forms tags 
import { HttpModule } from '@angular/http';  // requests for http json files 
import { ChartModule } from 'angular2-chartjs';

// add component here everytime one is made  
// and don't forget to add it todeclarations 
import { AppComponent } from './app.component';
import { UserComponent } from './userComponent/user.component';
import { AboutComponent } from './aboutComponent/about.component';
import { EditComponent } from './editComponent/edit.component';
import { PostsComponent } from './postsComponent/posts.component';
import { GraphComponent } from './graphComponent/graph.component';
import { routing } from './app.routing';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule, routing /*, ChartModule*/],
    declarations: [ AppComponent, UserComponent, AboutComponent, 
                EditComponent, PostsComponent, GraphComponent],
    bootstrap: [ AppComponent ]
})

export class AppModule { }