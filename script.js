const add_btn = document.getElementById("btn");
const listContainer = document.getElementById("listContainer");
let editMode = null;

add_btn.addEventListener("click", () => {
  const inputField = document.getElementById("itemInput");
  const list = document.createElement("li");
  const itemText = inputField.value;
  if (itemText === "") return;

  if (editMode !== null) {
    // Edit existing item
    editMode.querySelector(".list-text").innerText = itemText;
    editMode = null;
  } else {
    list.innerHTML = `
        <div class="list-item">
            <div class="list-text">${itemText}</div>
            <div class="btn-container">
              <div class="edit-btn" onclick="editItem(this)">
                <i class='bx bxs-edit-alt'></i>
              </div>
              <div class="delete-btn" onclick="deleteItem(this)">
                <i class='bx bxs-trash'></i>
              </div>
            </div>
        </div>`;
    listContainer.appendChild(list);
    inputField.value = "";
  }
});

function deleteItem(element) {
  element.parentElement.parentElement.remove();
}

function editItem(element) {
  const listItem = element.closest("li");
  const text = listItem.querySelector(".list-text").innerText;
  document.getElementById("itemInput").value = text;
  editMode = listItem;
}
