// Array de objetos com propriedades 'nome' e 'nota'
const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 4 },
    { nome: 'Carlos', nota: 6 },
];

// Função para filtrar notas maiores ou iguais a 6
const filtrarNotasAprovadas = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
};

// Exibição dos alunos aprovados no console
console.log('Alunos aprovados:');
console.log(filtrarNotasAprovadas(alunos));