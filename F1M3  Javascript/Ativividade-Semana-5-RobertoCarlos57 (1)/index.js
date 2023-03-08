const prompt = require('prompt-sync')();
var array_bolsas = [];
var codigo = 0;

do {
    console.log("Sistema de Cadastro de bolsas");
    console.log("1 - Inserir Bolsa");
    console.log("2 - Excluir Bolsa");
    console.log("3 - Listar Bolsa");
    console.log("0 - Sair");

    var opcao = prompt("Digite sua opção: ");

    if (opcao == 1) {
        console.log("\n\nInserindo Bolsa...\n");
        let codigo = parseInt(prompt("Digite o código: "));
        let modelo = prompt("Digite o Modelo: ");
        let formato = prompt("Digite o Formato: ");
        let colecao = prompt ("Digite a Coleção: ")
        let cor = prompt("Digite a Cor: ");
        let preco = prompt("Digite o Preco: ");

        // Neste trecho estamos declarando um objeto
        const bolsa = {
            codigo: codigo,
            modelo: modelo,
            formato: formato,
            colecao: colecao,
            cor: cor,
            preco: preco
        }
        // Chamar a função inserir
        inserir_bolsa(bolsa);
    } else if (opcao == 2) {
      console.log("\n\nListando bolsas...\n");
      listar_bolsas();
      console.log("\n")
        let codigo = parseInt(prompt("Digite o código: "));
      // Chamar a função exclui1r
    excluir_bolsa(codigo);
        
    } else if (opcao == 3) {
        console.log("\n\nListando bolsas...\n");
        // Chamar a função listar
        listar_bolsas();
    } else {
        console.log("\n\nSaindo do programa...\n");
    }

    prompt("\nEnter para continuar...");
    console.clear();
} while (opcao != 0)


function inserir_bolsa(bolsa) {
    // Implementar corpo da função
    array_bolsas.push(bolsa);

}

function excluir_bolsa(codigo) {
  // Implementar corpo da função
  array_bolsas.forEach(bolsa => {
    if (bolsa.codigo == codigo){
      const position = array_bolsas.indexOf(bolsa);
      if (position != -1) {
        array_bolsas.splice(position,1);
      }
    }
  })
}

function listar_bolsas() {
    // Implementar corpo da função
    for (let i = 0; i < array_bolsas.length;i++) {
     console.log(`${array_bolsas[i]['codigo']}: ${array_bolsas[i]['modelo']} - ${array_bolsas[i]['formato']} - ${array_bolsas[i]['colecao']} - ${array_bolsas[i]['cor']} - ${array_bolsas[i]['preco']}`);
    }


}