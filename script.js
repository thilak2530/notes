const notescontainer=document.querySelector(".notes-container");
const notes=document.querySelectorAll(".input-box");
const createbtn=document.querySelector(".createbtn");

function showData(){
    notescontainer.innerHTML= localStorage.getItem("notes");
}
showData();

function updateStorage(){
    localStorage.setItem("notes",notescontainer.innerHTML);

}

createbtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="delete - Copy.png";
    notescontainer.appendChild(inputBox).appendChild(img);


})

notescontainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll("input-box");
        notes.foreach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
      
})

