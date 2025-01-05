const btn = document.getElementById('btn')
const deleteBtn = document.getElementById('delete')
const show = document.getElementById('show')
const div = document.getElementById('div')

btn.addEventListener("click", function(){
    localStorage.setItem("test", "SAVED!")
    alert("saved!")
})
deleteBtn.addEventListener("click", function(){
    localStorage.clear();
    alert("removed!")
})
show.addEventListener("click", function(){
    let text = localStorage.getItem("test")
    div.textContent = text
})