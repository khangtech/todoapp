var btn = document.getElementById("btnAdd");
var task = document.getElementById("txtTask");
var ul = document.getElementById("listTask");

function checkInputLength() {
	return task.value.length;
}

function createElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(task.value));
	ul.appendChild(li);
	task.value ="";

	li.addEventListener("click", function() {
		li.classList.toggle("done");
	});

	var delButton = document.createElement("button");
	delButton.appendChild(document.createTextNode("Delete"));
	li.appendChild(delButton);

	delButton.addEventListener("click", function() {
		ul.removeChild(li);
	});

}

function addListAfterListenClick() {
	if (checkInputLength()>0) {
		createElement();
	}
}

function addListAfterListenPress(event) {
	if (checkInputLength()>0 && event.keyCode === 13) {
		createElement();
	}
}

btn.addEventListener("click",addListAfterListenClick);
txtTask.addEventListener("keypress", addListAfterListenPress);

