let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit", (e) => {
  e.preventDefault()
  createItem(ourField.value)
} )

function createItem(x) {
  let outhtml = `<li>${x} <button onclick="deleteItem(this)">Delete</button></li>`
  ourList.insertAdjacentHTML("beforeend", outhtml)
  ourField.value = ""
  ourField.focus()
}

function deleteItem(elementToDelete) {
  elementToDelete.parantElement.remove()
}
