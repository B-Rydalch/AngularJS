// completed; last edited: 4/12/17
// known bug: login page under development

import {ModuleWithProviders} from '@angular/core'; 
import {Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './loginComponent/login.component';
import { UserComponent } from './userComponent/user.component';
import { AboutComponent } from './aboutComponent/about.component';
import { EditComponent } from './editComponent/edit.component';
import { PostsComponent } from './postsComponent/posts.component';
import { GraphComponent } from './graphComponent/graph.component';

const appRoutes: Routes = [
    // {
    //     path:'',
    //     component: LoginComponent
    // },
    {
        path:'',
        component: UserComponent
    },
    {
        path:'edit',
        component: EditComponent
    },
    {
        path:'posts',
        component: PostsComponent
    },
    {
        path:'graph', 
        component:GraphComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);