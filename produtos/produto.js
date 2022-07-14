
let produtos = ["Computador", "Telefone", "Mouse","Teclado"];

console.log("LISTA ::> ", produtos);

console.log("ESSA É A QUANTIDADE DE PRODUTOS NA LISTA ::> ", produtos.length);

let newProdutos = produtos.filter( (item) => {
    return item != "Mouse";
});

console.log("ESSA É A LISTA SEM O ITEM MOUSE ::> ", newProdutos);

        let findProduto = produtos.find( (item) => {
            if(item === "Computador") {
                return console.log("ITEM ENCONTRADO COM SUCESSO !", produtos[0]);
                
            }else{
               return console.log("ITEM NÃO ENCONTRADO DESEJA ADICIONAR A LISTA ?"); 
            }
        });

let retirarItem =  produtos.filter( (item, index, array) => {
    return index != 1;
});

console.log("RESULTADO DA LISTA SEM O SEGUNDO ITEM", retirarItem);

console.log("questão 2 =============================================");


let numeros = [1,3,5,7,0,9];

numeros.sort(function(a, b){
    return a - b;
});

console.log("ORDENANDO DO MENOR PARA OMAIOR ::> ", numeros);

let retirarNumero =  numeros.filter( (item, index, array) => {
    return index != 0;
});

console.log("pimeiro numero da lista retirado ::> ", retirarNumero);

let newOrderList = retirarNumero.sort(function(a, b){
    return b - a;
});

console.log("ORDENANDO DIFERENTE ::> ", retirarNumero);

console.log("questão 3 =============================================");


let data = new Date;
let day = data.getDay();
let month = data.getMonth();
let year = data.getFullYear();

console.log(data, day, month, year);