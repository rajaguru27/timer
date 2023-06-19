var start =document.getElementById("start");
var stop=document.getElementById("stop");
var reset =document.getElementById("reset");

var time =document.getElementById("time");
var sec =document.getElementById("sec");
var min =document.getElementById("min");
var fast =document.getElementById("fast");

var a=0;
var c=0;
var intervalid; 

start.addEventListener("click",function(){
    intervalid= setInterval(function(){
        a++;
        min.innerHTML = a;
        if(a>9){
            fast.style.display="none";
        }
        if(a>59){
            fast.style.display="block";
            min.innerHTML=0;
            a=0;
            c++;
            sec.innerHTML=c+":";
            
        }
        if(c>9){
            time.style.display="none";
        }
        
    },20,a)
   
        
   
})
stop.addEventListener("click",function(){
    clearInterval(intervalid);
})

reset.addEventListener("click",function(){
    clearInterval(intervalid);
    a=0;
    c=0;
    sec.innerHTML=0+":";
    min.innerHTML=0;
    time.style.display="block";
    fast.style.display="block";
})





