var currentcontent = new Array(4).fill(false);
var id=0;
function gethomepage(){
for(let i=0; i<currentcontent.length; i++){
    if(currentcontent[i]==true){
      id =i;
      currentcontent[i]=false;
      break;
    }
}
currentcontent[0]=true;
switch(id){
  case 0:
    break;
  case 1:
    document.getElementById('assignment').style.display="none"; 
    break;
  case 2:
    document.getElementById('quiztab').style.display="none";  
    break;
  case 3:
   break;   
}
document.getElementById('annocement').style.display ="";

}

function getassignments(){
  for(let i=0; i<currentcontent.length; i++){
    if(currentcontent[i]==true){
      id =i;
      currentcontent[i]=false;
      break;
    }
}
currentcontent[1]=true;
switch(id){
  case 0:
    document.getElementById('annocement').style.display="none";
    break;
  case 1: 
    break;
  case 2:
    document.getElementById('quiztab').style.display="none";  
    break;
  case 3:
   break;   
} 
document.getElementById('assignment').style.display ="";


}
function getquiz(){
  for(let i=0; i<currentcontent.length; i++){
    if(currentcontent[i]==true){
      id =i;
      currentcontent[i]=false;
      break;
    }
}
  currentcontent[2]=true;
  switch(id){
  case 0:
    document.getElementById('annocement').style.display="none";
    break;
  case 1: 
  document.getElementById('assignment').style.display="none";
    break;
  case 2:  
    break;
  case 3:
   break;   
}
 
document.getElementById('quiztab').style.display ="";
}

function getcalendar(){
currentcontent[3]=true;
window.location.href = "../html/calendar.html"; 
}