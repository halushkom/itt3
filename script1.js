function addItem() {
    let date = new Date()
    name.value = localStorage.getItem('name');
    name.oninput = () => {
        localStorage.setItem('name', area.value)

    };

    sname.value = localStorage.getItem('sname');
    name.oninput = () => {
        localStorage.setItem('sname', area.value)

    };
    email.value = localStorage.getItem('email');
    email.oninput = () => {
        localStorage.setItem('email', area.value)

    };

    let item = document.createElement('tr')
    item.innerHTML += "<td><input type='checkbox'></td>"
    item.innerHTML += "<td>" + name.value + "</td>"
    item.innerHTML += "<td>" + sname.value + "</td>"
    item.innerHTML += "<td>" + email.value + "</td>"
    item.innerHTML += "<td>" + date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + "</td>"
    table.appendChild(item)
}