const url = 'http://localhost:3000/usuario';

function getAllUsers(){
    fetch(url)    
    .then(res => res.json())
    .then(data => {
        data.map((users)=>{
            const tr = document.createElement('tr');

            const tdNome = document.createElement('td');
            const tdDataDeNascimento = document.createElement('td');
            const tdAcoes = document.createElement('td');
    
            tdNome.innerText = users.nome;
            tdDataDeNascimento.innerText = users.datadenascimento;
            tdAcoes.innerHTML = 
            `
            <button type="button" class="btnA" onClick="updateUsers(${users.id})">
                Editar
            </button>

            <button type="button" class="btnD" onClick="DeleteUsers(${users.id})">
                Deletar
            </button>
            `;
    
            tr.appendChild(tdNome);
            tr.appendChild(tdDataDeNascimento);
            tr.appendChild(tdAcoes);
    
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

function DeleteUsers(id){
    fetch(`http://localhost:3000/usuario/${id}`,{
        method: "DELETE",
        headers:{
            "Content-Type": "application/json"
        }
    })

    .then(res => {
        if(res.ok){
            Toastify({
                text: 'Usuario Deletado!',
                position: 'center',
                gravity: "bottom",
                duration: 2000,
                style: {
                    background: "#ff0000",
                    color: 'white'
                }
            }).showToast();
            setTimeout(() => {
                location.reload()
            }, 2000)
        }else{
            console.log('Erro na Exclusão');
        }
    })
    .catch(error => {
        console.log('Error: ', error);
    })
}

function updateUsers(id){
    const nome = document.getElementById('nome').value;
    const dataDeNascimento = document.getElementById('dataDeNascimento').value;
    
    fetch(`http://localhost:3000/usuario/${id}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            dataDeNascimento: dataDeNascimento
        })
    })

    .then(res => {
        if(res.ok){
            Toastify({
                text: 'Usuario Atualizado!',
                position: 'center',
                gravity: "bottom",
                duration: 2000,
            }).showToast();
            setTimeout(() => {
                location.reload()
            }, 2000) 
        }else{
            console.log('Erro na atualização');
        }
    })
    .catch(error => {
        console.log('Error: ', error);
    })
}
