//completed; last edited 4/12/17

import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'posts',
    templateUrl: 'posts.component.html',
    providers:[PostsService]
})

export class PostsComponent { 
    posts:Posts[];

    constructor(private postsService: PostsService){
        this.postsService.getPosts().subscribe(posts =>{
            this.posts = posts;
        });
    }
}

interface Posts {
    id: number; 
    title: string; 
    body: string;
}