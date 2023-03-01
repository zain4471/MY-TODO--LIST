const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = input.value;
  if(!task) {
    alert("Please Add A Task....")
  }else
{ 
  const task_el = document.createElement("div");
  task_el.classList.add("task");

  const task_content_el = document.createElement("div");
  task_content_el.classList.add("content");

  task_el.appendChild(task_content_el);

  const task_input_el = document.createElement("input");
  task_input_el.classList.add("text");
  task_input_el.type = "text";
  task_input_el.value = task;
  task_input_el.setAttribute("readonly", "readonly");

  task_content_el.appendChild(task_input_el);

  const task_action_el = document.createElement("div");
  task_action_el.classList.add("actions");

  const task_edit_el = document.createElement("button");
  task_edit_el.classList.add("edit");
  task_edit_el.innerText = "Edit";

  const task_delete_el = document.createElement("button");
  task_delete_el.classList.add("delete");
  task_delete_el.innerText = "Delete";

  task_action_el.appendChild(task_edit_el);
  task_action_el.appendChild(task_delete_el);

  task_el.appendChild(task_action_el);

  list_el.appendChild(task_el);

  input.value = "";

  task_delete_el.onclick = function () {
    list_el.removeChild(task_el);
  
  };

  task_edit_el.onclick = function () {
    if (task_edit_el.innerText.toLowerCase() == "edit") {
      task_edit_el.innerText = "Save";
      task_input_el.removeAttribute("readonly");
      task_input_el.focus();
    } else {
      task_edit_el.innerText = "Edit";
      task_input_el.setAttribute("readonly", "readonly");
    }
  };
}
});


let task_input_el = document.getElementsByClassName("text");
let task_edit_el = document.getElementsByClassName("edit")
let task_delete_el = document.getElementsByClassName("delete")
let task_el = document.getElementsByClassName("task")

 for(let i = 0; i < task_el.length; i++) {
    // task_el[i].preventDefault()
    // console.log(task_el[i])
    const task_action_el = document.createElement("div");
    task_action_el.classList.add("actions");
  
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerText = "Edit";
  
    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerText = "Delete";

    task_action_el.appendChild(task_edit_el);
    task_action_el.appendChild(task_delete_el);

    task_el[i].appendChild(task_action_el)


    
    
    
}
let cancel_btn = document.getElementsByClassName("delete")
for(let i =0; i <cancel_btn.length; i++) {

    cancel_btn[i].onclick = function () {
        let div = this.parentElement;
        let div2 = div.parentElement
        div2.remove()
    }
}

let edit_btn = document.getElementsByClassName("edit");
for(let i = 0; i < edit_btn.length; i++){
    let task_input_el = document.getElementsByClassName("text")
    edit_btn[i].onclick = function () {
        if (task_edit_el[i].innerText.toLowerCase() == "edit") {
            task_edit_el[i].innerText = "Save";
            task_input_el[i].removeAttribute("readonly");
            task_input_el[i].focus();
          } else {
            task_edit_el[i].innerText = "Edit";
            task_input_el[i].setAttribute("readonly", "readonly");
          }
    }
}

   

