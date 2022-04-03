var counter=0;
var set=document.querySelector("#integer1");

var d=document.querySelector("#de");
var r=document.querySelector("#re");
var i=document.querySelector("#inc");

function dsc(){
    counter--;
    set.innerHTML=counter;
}
function rst(){
    counter=0;
    
    set.innerHTML=counter;
}
function inc(){
  counter++;

  set.innerHTML=counter;
}


d.addEventListener('click',dsc);
r.addEventListener('click',rst);
i.addEventListener('click',inc);



