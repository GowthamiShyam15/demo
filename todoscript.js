const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask(){
    if(inputBox.value==""){
        alert("You must write something")
    }
    else{
      let li = document.createElement("li"); //<li></li>
      li.innerHTML = inputBox.value; //<li>some</li>
      listContainer.appendChild(li);

      let span = document.createElement("span"); //<span></span>
      span.innerHTML = "\u00d7"; //<span>x</span>
      li.appendChild(span)
    }
    inputBox.value=" "
    saveData()
}
listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle('checked')
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
})

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem('data')
}
showTask();
