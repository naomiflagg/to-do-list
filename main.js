(()=>{"use strict";const e=(()=>{const e=[];return{toggleDisplay(e){e.classList.toggle("no-display")},addTask(t){let s=document.createElement("li"),a=document.querySelector(".tasks");e.push(t),a.appendChild(s),s.textContent=t.name}}})();document.addEventListener("click",(t=>{let s=t.target;switch(!0){case s.classList.contains("drop-down"):e.toggleDisplay(s.lastElementChild);break;case s.classList.contains("new-task"):e.toggleDisplay(document.querySelector(".new-task-form"));break;case s.classList.contains("new-list"):e.toggleDisplay(document.querySelector(".new-list-form"));break;case s.classList.contains("submit"):t.preventDefault();let a=(e=>{const t=document.querySelector('input[name="priority"]:checked').value;return(({name:e,details:t,dueDate:s,list:a,priority:l})=>({name:e,details:t,dueDate:s,list:a,priority:l}))({name:e.elements[0].value,details:e.elements[1].value,dueDate:e.elements[2].value,list:e.elements[3].value,priority:t})})(s.parentNode);e.addTask(a),e.toggleDisplay(document.querySelector(".new-task-form"))}}))})();