$ = (sel) => document.getElementById(sel);
Xstart = 0, Xend = 0, Ystart = 0, Yend = 0

function getMousePos(evt) {
    var rect = $("canvas").getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * c.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * c.height
    };
}

function handleMouseDown(event) {
    var mouse = getMousePos(event)
    Xstart = mouse.x.toFixed(0), Ystart = mouse.y.toFixed(0);
    $("downlog").innerHTML = `Down: ${Xstart} / ${Ystart}`;
}

function handleMouseUp(event) {
     var mouse = getMousePos(event)
    $("downlog").innerHTML = `Down: ${Xstart} / ${Ystart}  Up: ${mouse.x.toFixed(0)} / ${mouse.y.toFixed(0)}`;

    var str = '', stack = []
    for(var i = 0; i < nodes.length; i++){
        if(mouse.x>nodes[i].x  && Xstart<nodes[i].x && mouse.y>nodes[i].y  && Ystart<nodes[i].y ){
            stack.push(nodes[i])
        }
    }
    stack.sort((a,b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0)); 
            
    //-----------------------------------------------------------------------
    if(stack[0].time==stack[1].time-1){
        str += stack[0].f + stack[0].t
    } else  str += `${stack[0].f}${stack[0].t}(${stack[0].time})  `

    for(var i = 1; i < stack.length; i++){
        if(stack[i-1].time==stack[i].time-1){
            str += `${stack[i].t}`
        } else  str += ` ${stack[i].f}${stack[i].t}(${stack[i].time}) `
    }
     $("dump").innerHTML = str;
    //-----------------------------------------------------------------------
}

function handleMouseMove(event) {
     var mouse = getMousePos(event)
    $("movelog").innerHTML = "Pos: " + mouse.x.toFixed(0) + " / " + mouse.y.toFixed(0);
}


$("canvas").addEventListener('mousedown', handleMouseDown, false);
$("canvas").addEventListener('mousemove', handleMouseMove, false);
$("canvas").addEventListener('mouseup', handleMouseUp, false);
//////////////////////////////////////////////////////////////////////////////////
// chooseOne = (x) => Math.floor( Math.random() * x.length )
// dist = (x1, y1, x2, y2) => Math.sqrt((x1-=x2)*x1 +(y1-=y2)*y1)
// size = (a,b) => b-a
/////////////////////////////////////////////////////////////////////////////////
