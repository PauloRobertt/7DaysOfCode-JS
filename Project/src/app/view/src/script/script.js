const url = 'http://localhost:3000/usuario';

function getAllUsers(){
    fetch(url)    
    .then(res => res.json())
    .then(data => {
        data.map((users)=>{
            const tr = document.createElement('tr');
            const tdNome = document.createElement('td');
            const tdDataDeNascimento = document.createElement('td');
    
            tdNome.innerText = users.nome;
            tdDataDeNascimento.innerText = users.datadenascimento;
    
            tr.appendChild(tdNome);
            tr.appendChild(tdDataDeNascimento);
    
            usersContainers.appendChild(tr);
        })
    })
    .catch(error => {
        console.log('Erro: ', error)
    })
}

getAllUsers()

function AddUsers(){
    const nome = document.getElementById('nome').value;
    const dataDeNascimento = document.getElementById('dataDeNascimento').value;
    
    fetch(url,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            dataDeNascimento: dataDeNascimento
        })
    })

    .then(res => res.json())
    .then(ret => {
        console.log(ret);
    })
    .catch(error => {
        console.log('Error: ', error)
    })
}
