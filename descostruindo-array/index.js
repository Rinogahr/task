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


// function novoUsu(info){
//     let data = {
//         ...info,
//         status: "ATIVO",
//         dataInicio: "05/07/2022",
//         id: 1
//     }
//     console.log(data)
// }

// novoUsu({ nome: "João Pedro", sobreNome: "Maciel", idade: 13});

//========================================
        //REST Operatior

// function convidados(...nomes) {
//     console.log("SEJAM BEM VINDOS TODOS OS CONVIDADOS");
//     console.log(nomes);
// };

// convidados("Rodrigo", "Zaminha", "João", "Lukinhas");

// function sorteador(...numeros){
//     console.log(numeros);
    
//     const numeroGerado = Math.floor(Math.random() * numeros.length);

//     console.log(numeroGerado);

//     console.log(numeros[numeroGerado]);
// }
// sorteador(10,25,95,13,11,17);

//========================================
        //MAP = PERCORRER TODO O ARRAY

        // let lista = ["Rodrigo","Zaminha","João Pedr", "José Lukas"];

        // lista.map((item, index) =>{
        //         console.log('mostrando o resultado que tem no item :>> ', item, 
        //         "e essa é a possição de cada item mas utilizando o index ::>", index);
        // })

//========================================
        //REDUCE = O REDUCE BUSCA REDUZIR UM ARRAY

// let numeros = [5,3,2,1,7];

// let total = numeros.reduce( (acumulador, numero, indice, original) =>{
//         console.log(`${acumulador} - total ate o momento`);
//         console.log(`${numero} - valor atual`);
//         console.log(`${indice} - indice atual`);
//         console.log(`${original} - array original`);
//         console.log(`==================================`);
//         return acumulador += numero
// })

// console.log('TOTAL DO REDUCE É :>> ', total);


//========================================
        //FIND = O FIND E PRA FASZER UMA  BUSCA EM UM ARRAY

        // let listagem = [5, 3, "Rodrigo", 2, "Zaminha"];

        // let buscar = listagem.find( (item) => {
        //     if(item === "Zaminha") return console.log("ITEM ENCONTRADO COM SUCESSO !"); 
        // });

        // console.log(buscar);


//========================================
        //FILTER = O FILTER SERVE PRA FILTRAR ALGUMA COISA DENTRO DE UMA ARRAY

let palavras = ["Rodrigo", "Zaminha", "João Pedro", "José Lukas", "Aula de Programação" , "João Pedro"];

let resultado = palavras.filter( (item) => {
        // return item.length >= 5;
        return item === "João Pedro";
});

console.log(resultado);