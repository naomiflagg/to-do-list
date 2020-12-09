(()=>{"use strict";const e={tasks:[],getInput(e){const t=document.querySelector('input[name="priority"]:checked').value;return(({name:e,details:t,dueDate:s,list:a,priority:n})=>({name:e,details:t,dueDate:s,list:a,priority:n}))({name:e.elements[0].value,details:e.elements[1].value,dueDate:e.elements[2].value,list:e.elements[3].value,priority:t})},getIndex(e){return this.tasks.indexOf(e)},addTask(e){this.tasks.push(e)},removeTask(e){let t=e.dataset.value;this.tasks.splice(t,1)}},t={lists:[],getInput:e=>e.elements[0].value,addList(e){this.lists.push(e)},listExists(e){if(this.lists.includes(e))return!0}},s={toggleDisplay(e){e.classList.toggle("no-display")},toggleStrikethrough(e){e.classList.toggle("strikethrough")},addTask(t){const s=document.createElement("tr");(()=>{const a=document.querySelector(".tasks"),n=e.getIndex(t);0===n&&(this.toggleDisplay(document.querySelector(".table-hdrs")),this.toggleDisplay(document.querySelector("h1"))),a.appendChild(s),s.classList.add(t.priority,"task"),s.dataset.value=n})(),(()=>{const e=document.createElement("td"),t=document.createElement("input");s.appendChild(e),e.appendChild(t),t.setAttribute("type","checkbox"),t.classList.add("checkbox")})(),(()=>{const e=document.createElement("td");s.appendChild(e),e.textContent=t.name})(),(()=>{const e=document.createElement("td");s.appendChild(e),e.textContent=t.dueDate})(),(()=>{const e=document.createElement("td"),t=document.createElement("i");s.appendChild(e),e.appendChild(t),t.classList.add("fas","fa-edit","edit-task")})(),(()=>{const e=document.createElement("td"),t=document.createElement("i");s.appendChild(e),e.appendChild(t),t.classList.add("fas","fa-trash-alt","delete-task")})()},addList(e){const t=document.createElement("option"),s=document.querySelector("#select-list");t.textContent=e;const a=document.querySelector("#select-list2"),n=document.createElement("option");n.textContent=e,s.appendChild(t),a.appendChild(n);const l=document.createElement("li");document.querySelector(".lists").appendChild(l),l.textContent=e},removeTask(e){e.remove(),this.recalibrateIndex()},recalibrateIndex(){let e=document.querySelectorAll(".task");if(e.length>0){let t=0;e.forEach((e=>{e.dataset.value=t,t++}))}else this.toggleDisplay(document.querySelector(".table-hdrs")),this.toggleDisplay(document.querySelector("h1"))}};document.addEventListener("click",(a=>{const n=a.target;switch(!0){case n.classList.contains("drop-down"):s.toggleDisplay(n.lastElementChild);break;case n.classList.contains("fa-caret-down"):s.toggleDisplay(n.nextElementSibling);break;case n.classList.contains("new-task"):s.toggleDisplay(document.querySelector(".new-task-form"));break;case n.classList.contains("new-list"):s.toggleDisplay(document.querySelector(".new-list-form"));break;case n.classList.contains("submit-task"):a.preventDefault();const l=document.querySelector(".new-task-form"),i=e.getInput(l),c=i.list;t.listExists(c)||(t.addList(c),s.addList(c)),e.addTask(i),s.addTask(i),l.reset(),s.toggleDisplay(l);break;case n.classList.contains("submit-list"):a.preventDefault();const o=document.querySelector(".new-list-form"),d=t.getInput(o);t.listExists(d)||(t.addList(d),s.addList(d)),o.reset(),s.toggleDisplay(o);break;case n.classList.contains("checkbox"):s.toggleStrikethrough(n.parentNode.parentNode);break;case n.classList.contains("delete-task"):const r=n.parentNode;e.removeTask(r),s.removeTask(r);break;case n.classList.contains("edit-task"):const u=n.parentNode;e.getInput(u)}}))})();