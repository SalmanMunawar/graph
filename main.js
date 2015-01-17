/**
 * Created by Salman Munawar on 1/4/2015.
 */
(function () {

    "use strict";

    var draw = {

        circle: function (params) {

            //Canvas Api:
            //arc(cx, y, radius, startAngle, endAngle, direction)

            /*
             Circle Function API
             draw.circle({

                     canvas: DOM Element,
                     size: Canvas size,
                     radius: Circle Size,
                     color: Circle color
             });
             */

            if (params.canvas) {

                var
                    canvas = params.canvas,
                    size = parseInt(params.size, 10) || 128,
                    radius = parseInt(params.radius, 10) || 64,
                    color = params.color || "#eeeeee",

                    xCoord = size / 2,
                    yCoord = size / 2,

                    ctx = canvas.getContext("2d");

                ctx.beginPath();
                ctx.arc(xCoord, yCoord, radius, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
                ctx.closePath();

            } else {

                console.error("Please select canvas");

            }

        },
        arc: function (params) {

            //Canvas Api:
            //arc(cx, y, radius, startAngle, endAngle, direction)

            /*
             Arc Function API
             draw.arc({
                     canvas: DOM element,
                     size: Canvas size,
                     radius: Arc Size,
                     color: Arc color,
                     percentage: Arc percentage,
                     width: Thickness of arc
             });
             */

            if (params.canvas) {

                var
                    canvas = params.canvas,
                    size = parseInt(params.size, 10) || 128,
                    radius = parseInt(params.radius, 10) || 64,
                    color = params.color || "#eeeeee",
                    width= params.width || 8,
                    percentage = params.percentage ? Math.PI * 2 * parseInt(params.percentage, 10) / 100 : 75,

                    xCoord = size / 2,
                    yCoord = size / 2,

                    ctx = canvas.getContext("2d");

                ctx.rotate(-Math.PI / 2);

                ctx.beginPath();
                ctx.arc(-xCoord, yCoord, radius, 0, percentage);
                ctx.strokeStyle = color;
                ctx.lineWidth = width;
                ctx.stroke();
                ctx.closePath();

            } else {

                console.error("Please select canvas");

            }//End if

        },
        score: function (element) {
            /*
             Score Function API

            Usage:
             JS
                draw.score(DOM Element);

            html
             <canvas
                         width="128"
                         height="128"
                         class="score"
                         data-percentage="64%"
                         data-background-color="#eeeeee"
                         data-core-color="#ffffff"
                         data-arc-color="#f1c40f"
             >
             </canvas>


             */
            if (element) {

                var paper = document.querySelector(element),
                    graphSize = parseInt(paper.width, 10),
                    radius = graphSize / 2;

                //Draw graph background
                this.circle({
                    canvas: paper,
                    size: graphSize,
                    radius: radius,
                    color: paper.getAttribute('data-background-color')
                });

                //Draw inner circle
                this.circle({
                    canvas: paper,
                    size: graphSize,
                    radius: radius * .75,
                    color: paper.getAttribute('data-core-color')
                });

                ////Draw arc
                this.arc({

                    canvas: paper,
                    size: graphSize,
                    percentage: paper.getAttribute('data-percentage'),
                    radius: (graphSize / 2) * .875,
                    width: (graphSize / 2) * .25,
                    color: paper.getAttribute('data-arc-color')

                });

            } else {

                console.error("Please select canvas");

            }//End if

        }//End Score

    }; //End Draw

    //Call draw.score function which will draw.circle twice and draw.arc once
    draw.score(".score");


    //---OR---\\


    /*
    //Just Call draw.circle and draw.arc directly

    //Draw large gray background
    draw.circle({
        canvas: document.querySelector('canvas'),
        size: 128,
        radius: 64,
        color: "#ecf0f1"
    });

    //draw.score(document.querySelector('canvas'));

    //Draw small white circle
    draw.circle({
        canvas: document.querySelector('canvas'),
        size: 128,
        radius: 48,
        color: "#FFFFFF"
    });

    //Draw yellow arc
    draw.arc({

        percentage: 85,
        canvas: document.querySelector('canvas'),
        size: 128,
        radius: 56,
        width: 16,
        color: "#f1c40f"

    });

   */


    //---Quick and Dirty---\\

    /* Graph
     var ctx, graph, graphEnd, graphSize, stat, xCoord, yCoord;

     graphSize = 128;

     xCoord = graphSize / 2;
     yCoord = graphSize / 2;

     graph = document.querySelector('canvas');
     ctx = graph.getContext("2d");

     //What percentage to draw
     stat = parseInt(graph.getAttribute('data-percentage'));

     //Draw the large gray background
     ctx.beginPath();
     ctx.arc(xCoord, yCoord, graphSize / 2, 0, Math.PI * 2);
     ctx.fillStyle = "#ecf0f1";
     ctx.fill();
     ctx.closePath();

     //Draw a small circle
     ctx.beginPath();
     ctx.arc(xCoord, yCoord, graphSize / 2.5, 0, Math.PI * 2);
     ctx.fillStyle = "#FFF";
     ctx.fill();
     ctx.closePath();

     //Draw arc
     ctx.rotate(-Math.PI / 2);
     ctx.beginPath();
     graphEnd = Math.PI * 2 * stat / 100;
     ctx.arc(-xCoord, yCoord, graphSize / 2.25, 0, graphEnd, false);
     ctx.strokeStyle = graph.getAttribute("data-color");
     ctx.lineWidth = graphSize / 12;
     ctx.stroke();
     ctx.closePath();

     */

}());