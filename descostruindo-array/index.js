// DESCONSTRUIR UM OBJETO


// let pessoa = {
//     nome: "Rodrigo",
//     sobrenome: "Maciel",
//     empresa: "Assembleia de Deus",
//     cargo: "Programador FullStack"
// }

// console.log(pessoa.nome);
// console.log(pessoa.cargo);

// let nome = "Nome qualquer";

// const { nome:nomePessoa, cargo, sobrenome, empresa} = pessoa;

// console.log(nome);
// console.log(nomePessoa);
// console.log(cargo);
// console.log(empresa);
// console.log(sobrenome);

//========================================
        //DESCONSTRUIR UMA ARRAY


// let pessoas = ["Rodrigo", "Zaminha", "Lucas", "João", "Clarinha"];

// let { 0:Rodrigo, 1:Zaminha, 2:terceiraPessoa} = pessoas;
// console.log(Rodrigo);
// console.log(Zaminha);
// console.log(terceiraPessoa);

// let [ primeiro, segundo, terceiro, quarto] = pessoas;

// console.log(primeiro);
// console.log(segundo);
// console.log(terceiro);
// console.log(quarto);

//========================================
        //Spread Operatior

// let primeiro = [1,2,3];

// let numero = [...primeiro,4,5,10];

// console.log(numero);

// let pessoa = {
//     nome: "Rodrigo",
//     idade: 32,
//     cargo: "Developed"
// }

// let dados ={
//     ...pessoa,
//     rua: "Ibicaré",
//     numero: 86,
//     cep: "51330-110"
// }

// console.log(dados);


function novoUsu(info){
    let data = {
        ...info,
        status: "ATIVO",
        dataInicio: "05/07/2022",
        id: 1
    }
    console.log(data)
}

novoUsu({ nome: "João Pedro", sobreNome: "Maciel", idade: 13});