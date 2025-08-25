const form = document.getElementById('userForm');
const userList = document.getElementById('userList');
const clearBtn = document.getElementById('clearList');


form.addEventListener('submit', function (event) {
    event.preventDefault();


    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const birthdate = document.getElementById('birthdate').value.trim();
    const email = document.getElementById('email').value.trim();


    if (!username || !password || !phone || !birthdate || !email) {
        console.error("Todos os campos devem ser preenchidos.");
        return;
    }

    const entryDiv = document.createElement('div');
    entryDiv.classList.add('entry');
    entryDiv.innerHTML = `
    <strong>Usuário:</strong> ${username}<br/>
    <strong>Telefone:</strong> ${phone}<br/>
    <strong>Data de Nascimento:</strong> ${birthdate}<br/>
    <strong>Email:</strong> ${email}
`;

    userList.appendChild(entryDiv);

    form.reset();
});


clearBtn.addEventListener('click', function () {
    userList.innerHTML = "";
});
