update()



function update(){
   var paragraph = localStorage.getItem("explaination")
   var agenda = localStorage.getItem("topic")
   console.log(paragraph);
   document.getElementById("explainationHeading").innerText = agenda;
   document.getElementById("paragraph").innerHTML = paragraph

}
