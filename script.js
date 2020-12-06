function addItem() {
    let name = document.getElementById('name').value
    let sname = document.getElementById('sname').value
    let email = document.getElementById('email').value
    let date = new Date()
    if (!validateEmail(email)) {
        alert('Invalid mail')
    }

    let item = document.createElement('tr')
    item.innerHTML = "<td><input type='checkbox'></td>"
    item.innerHTML += "<td>" + name + "</td>"
    item.innerHTML += "<td>" + sname + "</td>"
    item.innerHTML += "<td>" + email + "</td>"
    item.innerHTML += "<td>" + date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + "</td>"
    table.appendChild(item)
}
function editbtn() {
    let editRow = node.parentElement;
    let editName = editRow.children[1];
    let editSname = editRow.children[2];
    let editEmail = editRow.children[3];
    document.getElementById("name").value = editName.innerText;
    document.getElementById("sname").value = editSname.innerText;
    document.getElementById("email").value = editEmail.innerText;

    let btn = document.getElementById("editbtn");
    btn.onclick = function () {
        if (!validateEmail(document.getElementById("email").value)) {
            alert("invalid");
            return false;
        }

        editRow.innerHTML = "<td><input type='checkbox'></td>";
        editRow.innerHTML += "<td>" + document.getElementById("name").value + "</td>";
        editRow.innerHTML += "<td>" + document.getElementById("surname").value + "</td>";
        editRow.innerHTML += "<td>" + document.getElementById("mail").value + "</td>";

        document.getElementById("name").value = document.getElementById("sname").value = document.getElementById("email").value = "";
    }
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function delbtn() {
    let inputs = document.getElementById("table").getElementsByTagName("input");
    for (var i = 1; i < inputs.length; i++) {
        if (inputs[i].checked) {
            inputs[i].parentElement.parentElement.remove();
            i--;
        }
    }
}
let selectAll = document.getElementById("all");

selectAll.onclick = function () {
    var inputs = document.getElementById("table").getElementsByTagName("input");

    for (var i = 1; i < inputs.length; i++) {

        if (inputs[i].checked == true) {
            inputs[i].checked = inputs[0].checked = false;
        } else {
            inputs[i].checked = inputs[0].checked = true;
        }
    }
}
