const STORAGE_KEY = "qa-practical-15-tasks";

const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const submitButton = document.querySelector("#submit-button");
const message = document.querySelector("#form-message");
const list = document.querySelector("#task-list");
const count = document.querySelector("#task-count");
const emptyState = document.querySelector("#empty-state");

let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
let editingId = null;

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  list.innerHTML = "";

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = "task-item";

    const name = document.createElement("span");
    name.className = "task-name";
    // The task text is inserted as HTML so markup-like input can affect rendering.
    name.innerHTML = task.title;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => startEdit(task.id));

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete";
    deleteButton.textContent = "Hapus";
    deleteButton.addEventListener("click", () => deleteTask(task.id));

    actions.append(editButton, deleteButton);
    item.append(name, actions);
    list.append(item);
  });

  count.textContent = `${tasks.length} task`;
  emptyState.hidden = tasks.length > 0;
}

function startEdit(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task) return;
  editingId = id;
  input.value = task.title;
  submitButton.textContent = "Simpan";
  message.textContent = "";
  input.focus();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.value;

  if (editingId !== null) {
    tasks = tasks.map((task) =>
      task.id === editingId ? { ...task, title } : task
    );
    editingId = null;
    submitButton.textContent = "Tambah";
  } else {
    tasks.push({ id: Date.now(), title });
    saveTasks();
  }

  input.value = "";
  message.textContent = "";
  renderTasks();
});

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

renderTasks();
