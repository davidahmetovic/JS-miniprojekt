function createList() {
  var MyInput = document.getElementById("MyInput");
  var node = document.createElement("LI");

  var textnode = document.createTextNode(MyInput.value);
  node.appendChild(textnode);
  document.getElementById("Mylist").appendChild(node);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  node.appendChild(span);

  var i;

  for (i = 0; i < closebutton.length; i++) {
    closebutton[i].addEventListener("click", function() {
      this.parentElement.style.display = "none";
    });
  }
}

var closebutton = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebutton.length; i++) {
  closebutton[i].addEventListener("click", function() {
    this.parentElement.style.display = "none";
  });
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function(ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
