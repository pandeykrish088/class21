
function isTouching(P1,P2) {


    if(P2.x - P1.x < P1.width/2 + P2.width/2 && 
      P1.x - P2.x < P1.width/2 + P2.width/2 && 
      P1.y - P2.y < P1.height/2 + P2.height/2 && 
      P2.y - P1.y < P1.height/2 + P2.height/2) {
      
    return true;
    }
    
    else{
     return false;
    }
  
  
  
  }