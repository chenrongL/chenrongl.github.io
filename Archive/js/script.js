

var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
var progress = 0;
var lastx = 0;
var lasty = 0;
var draw_amount = 100;
ctx.fillStyle = '#FFA500';
var tabs = ["portfolio","services","contact","home"];
var colors = {
  "portfolio":"gold",
  "services":"green",
  "pricing":"pink",
  "contact":"gold",
  "home":"rgb(200,10,200)",
}
var animationModes ={
  "portfolio":"light",
  "services":"fern",
  "pricing":"fern",
  "contact":"igloo",
  "home":"fern",
}
var animationMode = "fern"
function switchTab(tab){
  for(i=0;i<tabs.length;i++){
    if(tabs[i]==tab){
      /*found tab*/
      document.getElementById(tab).style.display = "block";
      animationMode =animationModes[tab];
      count = 0;
      x = 0;
      ctx.fillStyle = colors[tab];
      ctx.strokeStyle = colors[tab];
      var drawing = true;
    }else{
      document.getElementById(tabs[i]).style.display = "none";
    }
  }
}

function drawCircle(count){
  ctx.strokeStyle = "gold";
  ctx.beginPath();    
  for(i=0;i<200;i+=1){  
    if(animationMode=="igloo"){
    ctx.arc(i+ctx.canvas.width/2, ctx.canvas.height/2, count+50*i/100,i/count,count/i);
    }else if(animationMode=="light"){
    /*ctx.arc(i+ctx.canvas.width/2, ctx.canvas.height/2, count+50*i/100,i/count,count/i);*/
    ctx.bezierCurveTo(i/count,i+count,count, i*count, i*count, i*count);
    }
    }    
  ctx.stroke();  
  }
var x = 0;
var count = 5;
var drawing = true;
window.setInterval(function(){
  if(drawing==true){  
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
  if(animationMode!="fern"){
  drawCircle(count);  
  count =(count +0.5) %200;
  }else{
    count =(count +0.5) %200;
    drawFern(x);  
    x = (x + 0.05) % 20;
      if(x>=20){
        drawing =false;
        x = 0;
      }
  }
  }else{
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
  }
},100);
function drawFern(x){
    draw_amount = 2000;
      for(i=0;i<draw_amount;i++){
          draw(Math.floor(lastx*70),-Math.floor(50+lasty*45-580));
          randomtransform = Math.random();
          if(randomtransform<0.85){
            /*0.85 0.04 -0.04 0.85 1.6*/
              newx = lastx* 0.85+ lasty*0.04*x ;
              newy = lastx* -0.04*x + lasty* 0.85 + 1.6;
          }else if(randomtransform>=0.85 && randomtransform<0.92){
              newx = lastx* -0.15 + lasty*0.28;
              newy = lastx* 0.26 + lasty*0.24 + 0.44;
          }else if(randomtransform>=0.92 && randomtransform<0.99){
              newx = lastx*0.2 + lasty*-0.26;
              newy = lastx*0.23 + lasty*0.22 + 1.6;
          }else if(randomtransform>0.99){
              newx = 0;
              newy = lasty*0.16
          }
          lastx = newx;
          lasty = newy;
      }
}

  function draw(x,y){      
      ctx.fillRect(x,y,1,1); // fill in the pixel at (10,10)
  }
ctx.canvas.width  = 400;
  ctx.canvas.height = window.innerHeight/2;

