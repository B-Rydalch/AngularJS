// completed; last edited: 4/12/17
// known bug: login page under development
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./userComponent/user.component");
var about_component_1 = require("./aboutComponent/about.component");
var edit_component_1 = require("./editComponent/edit.component");
var posts_component_1 = require("./postsComponent/posts.component");
var graph_component_1 = require("./graphComponent/graph.component");
var appRoutes = [
    // {
    //     path:'',
    //     component: LoginComponent
    // },
    {
        path: '',
        component: user_component_1.UserComponent
    },
    {
        path: 'edit',
        component: edit_component_1.EditComponent
    },
    {
        path: 'posts',
        component: posts_component_1.PostsComponent
    },
    {
        path: 'graph',
        component: graph_component_1.GraphComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map