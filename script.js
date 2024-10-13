const form = document.getElementById('form-contato');
const table = document.getElementById('tabela-contato');
const tbody = table.querySelector('tbody'); // Seleciona o tbody da tabela
const contatos = [];

//  formatar o telefone enquanto o usuário digita
document.getElementById('telefone').addEventListener('input', function (e) {
    let telefone = e.target.value;

    // Remove tudo que não for número
    telefone = telefone.replace(/\D/g, '');

    // Formata o telefone celular no formato (XX) XXXXX-XXXX
    if (telefone.length === 11) {
        telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } 
    // Formata o telefone fixo no formato (XX) XXXX-XXXX
    else if (telefone.length === 10) {
        telefone = telefone.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }

    // Atualiza o valor do campo
    e.target.value = telefone;
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    // Verifica se o contato já foi inserido
    if (contatos.some(contato => contato.nome === nome)) {
        alert(`O contato "${nome}" já existe na agenda.`);
    } else {
        const contato = { nome, telefone, email };
        contatos.push(contato);

        // Adiciona contato à tabela
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${telefone}</td>
            <td>${email}</td>
        `;
        tbody.appendChild(novaLinha);

        // Limpa os campos de entrada
        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
        document.getElementById('email').value = '';
    }
});
