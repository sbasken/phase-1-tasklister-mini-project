document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    buildToDo(e.target["new-task-description"].value)
    form.reset();
  })
});

function buildToDo(todo) {
  console.log(todo)
  let li = document.createElement('li');
  let btn = document.createElement('Button')
  li.textContent = `${todo}  `;
  btn.textContent = "x";
  li.appendChild(btn)
  document.querySelector("#tasks").appendChild(li);

  btn.addEventListener("click", handleDelete)
  console.log(document.querySelector("ul"))
}

function handleDelete(e) {
  e.target.parentNode.remove();
}

