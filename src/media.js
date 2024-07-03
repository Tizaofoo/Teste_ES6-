function Aluno(nome, qtfaltas, nota) {
    this.nome = nome;
    this.qtfaltas = qtfaltas;
    this.nota = nota;
}

    let Aluno1 = new Aluno("Jose Silva", 0, [0,10,20]);
    let Aluno2 = new Aluno("Paulo Santos", 5, [0,1,2]);
    let Aluno3 = new Aluno("Jose Santos", 10, [0,5,8]);
    let Aluno4 = new Aluno("Antonio Silva", 4, [0,7,9]);
    let Aluno5 = new Aluno("Maria dos santos", 6, [0,3,4]);

    let listalunos = [Aluno1 , Aluno2, Aluno3, Aluno4, Aluno5]

    console.log(listalunos)


  // trete

    const acum = [];

    listalunos.forEach(aluno => {
    const match = acum.find(media => media.nome === aluno.nome);
    if (match) {
        match.soma += aluno.nota
        match.notas++;
    } else {
        aluno.soma = aluno.nota
        aluno.notas = 1;
        acum.push(aluno)
    }
});

    const medias = [].map.call(acum, i => ({nome: i.nome, media: i.soma / i.notas}))

    console.log(medias);