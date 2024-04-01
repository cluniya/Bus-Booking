let users = [];

function bookBus() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const busOption = document.getElementById("bus-options").value;

    users.push({ name, email, phone, busOption });
    displayUsers();

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("bus-options").selectedIndex = 0;
}

function displayUsers() {
    const userList = document.getElementById("user-list");
    userList.innerHTML = "";
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} - ${user.email} - ${user.phone} - ${user.busOption}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.onclick = () => deleteUser(user);
        const editButton = document.createElement("button");

        editButton.textContent = "Edit";
        editButton.onclick = () => editUser(user);

        li.appendChild(deleteButton);
        li.appendChild(editButton);
        userList.appendChild(li);
    });
}

function deleteUser(user) {
    users = users.filter(u => u !== user);
    displayUsers();
}

function editUser(user) {
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("phone").value = user.phone;
    document.getElementById("bus-options").value = user.busOption;
    deleteUser(user);
}

function filterByBus() {
    const filterOption = document.getElementById("filter-options").value;
    if (filterOption === "all") {
        displayUsers();
    } else {
        const filteredUsers = users.filter(user => user.busOption === filterOption);
        const userList = document.getElementById("user-list");
        userList.innerHTML = "";
        filteredUsers.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email} - ${user.phone} - ${user.busOption}`;
            userList.appendChild(li);
        });
    }
}