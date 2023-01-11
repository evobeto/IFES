const prompt = require('prompt-sync')();
let alunos = [];

// Implementar a entrada de dados
for (let i = 0; i <= 9; i++) {
    const aluno = {
        name: prompt(`Digite o nome do aluno ${i}: `),
        height: parseFloat(prompt(`Digite a Altura do aluno ${i}: `))
    }
    alunos.push(aluno);
};

/*alunos = [
  {name: 'Roberto', height: 1.7},
  {name: 'Iuly', height: 1.55},
  {name: 'Paula', height: 1.6},
  {name: 'Renata', height: 1.65},
  {name: 'José', height: 1.72},
  {name: 'Wagner', height: 1.7},
  {name: 'Lourdes', height: 1.5},
  {name: 'Pedro', height: 1.78},
  {name: 'João', height: 1.62},
  {name: 'Marcos', height: 1.65},
]*/

// Implementar o processamento de dados
// Fazer for dentro de for
for (let i = 0; i < alunos.length; i++) {
    let count = 0;
    let result = [];
    for (let j = 0; j < alunos.length; j++) {
        if (alunos[j]["height"] < alunos[i]["height"]) {
            count++;
            result.push(alunos[j]["name"]);
        }
    }
    // Implementar a saída de dados
    console.log(`Aluno ${alunos[i]["name"]} é maior que ${count} aluno(s), sendo eles ${result.join()}`);
}