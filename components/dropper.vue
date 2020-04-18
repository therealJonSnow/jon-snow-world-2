<template>
    <div>
        <canvas id="dropper"></canvas>
    </div>
</template>

<style lang="scss" scoped>
#dropper {
    background-color: transparent;
    left: 0;
    position: fixed;
    top: 0;
}
</style>

<script>
import PathSeg from 'pathseg';
import decomp from 'poly-decomp';
window.decomp = decomp;
import {
  Engine,
  Render,
  Runner,
  World,
  Bodies,
  Body,
  Events,
  Composite,
  Composites,
  Constraint,
  Vector,
  Vertices,
  Svg,
  Mouse,
  MouseConstraint,
  Query,
  Common
} from "matter-js";

export default {
    name: 'Dropper',

    props: {
        image: String
    },

    data: function () {
        return {
        }
    },

    mounted() {
        var engine = Engine.create();
        var dropper = document.getElementById('dropper');
        var container = document.getElementsByClassName('main-container');
        var width = window.innerWidth;
        var height = window.innerHeight;
        var halfWidth = width / 2;
        var halfHeight = height / 2;

        var head = this.image;

        // create a renderer
        var render = Render.create({
            canvas: dropper,
            engine: engine,
            options: {
                width: width,
                height: height,
                background: 'transparent',
                wireframes: false
            }
        });

        var ground = Bodies.rectangle(halfWidth, height, width, 10, { 
            render: { 
                fillStyle: 'transparent', 
            },
            isStatic: true
        });
        var left = Bodies.rectangle(0, height, 10, (5*height), { 
            render: { 
                fillStyle: 'transparent', 
            },  
            isStatic: true
        });
        Body.rotate( left, -Math.PI/8);
        var right = Bodies.rectangle(width, height, 10, (5*height), { 
            render: { 
                fillStyle: 'transparent', 
            },  
            isStatic: true
        });
        Body.rotate( right, Math.PI/8);
  
        var path = [
            {x: 928.9, y: 524.0},
            {x: 903.5, y: 488.5},
            // {x: 911.9, y: 449.9},
            // {x: 906.3, y: 436.4},
            // {x: 907.8, y: 432.8},
            {x: 922.5, y: 405.688},
            {x: 944.7, y: 345.2},
            {x: 945.8, y: 344.6},
            // {x: 969.9, y: 339.2},
            {x: 979.7, y: 329.8},
            {x: 1037.2, y: 346.4},
            {x: 1042.3, y: 349.7},
            // {x: 1047.6, y: 368.1},
            {x: 1062.2, y: 388.9},
            // {x: 1047.6, y: 418.4},
            // {x: 1042.2, y: 433.1},
            // {x: 1039.3, y: 440.17},
            // {x: 1032.69, y: 451.66},
            {x: 1023.89, y: 477.67},
            // {x: 1006.18, y: 496.94},
            // {x: 997.58, y: 496.94},
            {x: 988.2, y: 508.4},
            // {x: 978.57, y: 519.9},
            {x: 962.62, y: 523.0},
            // {x: 953.15, y: 529.0},
            {x: 928.94, y: 524.0}
        ]
        // var path = document.getElementById('path');
        var face = Bodies.fromVertices(100, -100, path, {
            render: {
                // fillStyle: 'grey',
                strokeStyle: 'grey',
                strokeWidth: '5px',
                sprite: {
                    texture: head,
                    xScale: 1,
                    yScale: 1
                }

            },
        });
        Body.rotate( face, -Math.PI/4);

        // add all of the bodies to the world
        World.add(engine.world, [ground, left, right, face]);

        // add mouse control
        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });

        World.add(engine.world, mouseConstraint);

        // keep the mouse in sync with rendering
        Render.mouse = mouse;
        // run the engine
        Engine.run(engine);

        // run the renderer
        Render.run(render);

        if(window.innerWidth < 700) {
            var n = 4;
        } else {
            var n = 10;
        }

        var i;
        for (i = 0; i < n; i++) {
            var timer = 2000 + Math.random() * 2000;
            setTimeout( function(){
                var x = Math.random() * width;
                var y = -(Math.random() * 1000);
                var faceNew = Bodies.fromVertices(x, y, path, {
                    render: {
                        sprite: {
                            texture: head,
                            xScale: 1,
                            yScale: 1
                        }

                    },
                });
                Body.rotate(faceNew, Math.PI / Math.ceil(Math.random() * 10));
                World.add(engine.world, faceNew);
            }, timer)
        }
        
        dropper.addEventListener("click", function(){
            var x = event.clientX;
            var y = event.clientY;
            var faceClick = Bodies.fromVertices(x, y, path, {
                render: {
                    sprite: {
                        texture: head,
                        xScale: 1,
                        yScale: 1
                    }
                },
            });
            World.add(engine.world, faceClick);
        });
    }
}
</script>
