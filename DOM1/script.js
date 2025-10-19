var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("#list");
var listItems=document.querySelectorAll("#list li");
listItems.forEach((li) =>{
   var buttonDelete=document.createElement("button")
   buttonDelete.appendChild(document.createTextNode("DELETE"));
   li.appendChild(buttonDelete);
   ul.appendChild(li);
   buttonDelete.className="buttonDelete";
})
function inputLength(){
	return input.value.length;
}
function createElement(){
	var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    input.value="";
    var buttonDelete=document.createElement("button");
	buttonDelete.appendChild(document.createTextNode("DELETE"));
	buttonDelete.className="buttonDelete";
	li.appendChild(buttonDelete);
	ul.appendChild(li);
}
function addListAfterClick(){
	if(inputLength()>0){
		createElement();
	}
}
function addListAfterKeyPress(event){
	if(inputLength()>0 && event.keyCode===13){
		createElement();
	}
}
function del(task){
	if(task.target.className==="buttonDelete"){
		const li=event.target.parentElement;
		li.remove();
    }
}
function doneTask(task){
	if(task.target.tagName==="LI"){
		task.target.classList.toggle("done");
	}
}
ul.addEventListener("click",del);
ul.addEventListener("click",doneTask);
button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeyPress);