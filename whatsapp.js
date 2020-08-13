function commentHere() {
    let userComment = document.querySelector("#inputId1").value;
  
 
    const newElement = document.createElement("div");
    newElement.textContent = userComment; 
  
   
    newElement.style.background = "#ed7c56"; 
    newElement.style.color = "white";
    newElement.style.margin = "10px";
    newElement.style.fontSize = "30px";
    newElement.style.borderRadius = "30%";
  
    const commentBox = document.querySelector("#commentBox");
  
   
    commentBox.appendChild(newElement)
  
    
    document.querySelector("#inputId1").value = "";
  }

