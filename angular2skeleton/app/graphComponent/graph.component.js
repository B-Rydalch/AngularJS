// not completed still needs work 4/14/17 
// not able to get graph to appear 
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
var GraphComponent = (function () {
    function GraphComponent() {
        console.log("graphComponent initialized");
        // drawLine(); 
        // drawBar(); 
        // drawDoughnut();
        // this.ctx =  document.getElementById("theChart");
        //console.log("graph: " + this.ctx);
        // tutorial bar graph
        //////////////////////////////THE PROBLEM STARTS HERE//////////////////////////////////////
        //////VARIABLE NOT LINKING TO CANVAS/////////////
        // canvas id "theChart"
        // ctx = document.getElementById("#theChart");
        // const CHART = document.getElementById("theChart");
        // ctx = $("#theChart");
        // ctx = "theChart";
        // console.log(ctx);
        /*
     let chart = new Chart(ctx, {
    
    //////////////////////////////PROBLEM ENDS HERE//////////////////////////////////////////////
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    
    */
        /*
        
            function drawLine() {
            console.log("drawLine()");
            
            //var ctx ="myChart";
            var ctx = $("#myChart");
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                    datasets: [{
                        label: 'apples',
                        data: [12, 19, 3, 17, 6, 3, 7],
                        backgroundColor: "rgba(153,255,51,0.4)"
                    }, {
                        label: 'oranges',
                        data: [2, 29, 5, 5, 2, 3, 10],
                        backgroundColor: "rgba(255,153,0,0.4)"
                    }, {
                        label: 'pears',
                        data: [10, 9, 5, 20, 0, 14, 18],
                        backgroundColor: "rgba(200,0,0,0.4)"
                    }]
                }
            });
        }// end drawLine()
        
        function drawBar() {
            console.log("drawBar()");
            var ctx = document.getElementById('barChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                    datasets: [{
                        label: 'apples',
                        data: [12, 19, 3, 17, 6, 3, 7],
                        backgroundColor: "rgba(153,255,51,0.4)"
                    }, {
                        label: 'oranges',
                        data: [2, 29, 5, 5, 2, 3, 10],
                        backgroundColor: "rgba(255,153,0,0.4)"
                    }, {
                        label: 'pears',
                        data: [10, 9, 5, 20, 0, 14, 18],
                        backgroundColor: "rgba(200,0,0,0.4)"
                    }]
                }
            });
        }// end drawBar()
        
        function drawDoughnut() {
            console.log("drawDoughnug()");
            var ctx = document.getElementById('doChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['apples', 'oranges', 'pears'],
                    datasets: [{
                        data: [60, 56, 76],
                        backgroundColor: ["rgba(153,255,51,0.4)", "rgba(255,153,0,0.4)","rgba(200,0,0,0.4)"]
                    }]
                }
            });
        }// end drawDoughnut()
        */
    }
    return GraphComponent;
}());
GraphComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'graph',
        templateUrl: 'graph.component.html',
        styleUrls: ['graph.component.css']
    }),
    __metadata("design:paramtypes", [])
], GraphComponent);
exports.GraphComponent = GraphComponent;
//# sourceMappingURL=graph.component.js.map