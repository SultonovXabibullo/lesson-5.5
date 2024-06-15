// let root = document.getElementById("root");

// let container = document.createElement("div")
// container.classList.add("container")
// container.innerHTML="hello,JS"
// root.appendChild(container)
// container.classList.remove("my-10","mx-avto");

// let h1 = document.createElement("h1");
// h1.classList.add("box")
// h1.innerHTML="hello - Word"
// container.appendChild(h1);

// let btn = document.createElement("button");
// btn.innerHTML="Clic me"
// btn.classList.add("btn","py-2","px-5","bg-violet-500","mt-1")
// container.appendChild(btn);

// btn.addEventListener("click", ()=>{
//     h1.classList.toggle("box");
// })'

document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('nameInput').value;
    document.getElementById('output').textContent = 'Sizning ismingiz: ' + name;
});
