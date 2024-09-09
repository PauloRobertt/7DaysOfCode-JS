const url = 'http://localhost:5500/usuario';

const nome = document.getElementById('nome');
const dataDeNascimento = document.getElementById('dataDeNascimento');

async function getAllUsers(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getAllUsers()
