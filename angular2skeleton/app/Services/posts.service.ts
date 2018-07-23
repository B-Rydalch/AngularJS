 // completed; last edited: 4/12/17
 
 import { Injectable } from '@angular/core';
 import { Http } from '@angular/http';
 import 'rxjs/add/operator/map';

// services component built to handle json files 
// angular http add for this specific reason 
@Injectable()
export class PostsService{
    constructor(private http: Http ){
        console.log("postsService initialized");
    }

    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
          .map(res => res.json());
    }
}


