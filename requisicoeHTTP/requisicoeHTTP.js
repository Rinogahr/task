// REQUISIÇÃO HTTP

//https://sujeitoprogramador.com/rn-api/?api=posts <:: API UTILIZADA


let listElement = document.querySelector("#app");

let posts = [];

function appNutricao(){
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then( ( resp ) =>  resp.json() )
    .catch( (err) => { console.log('Erro ao buscar resultado ::> ', err)})
    .then( (json) => {
        posts = json;
        renderApi(posts);
    })
    .catch( (error) => { console.log('Erro ao buscar resultado depois de converter para JSON ::> ', error)})
    
}


function renderApi(vl){
    
    console.log(vl);
    // "id": 1,
    // "titulo": "Refeições proteicas para fazer antes de dormir",
    // "capa": "https://sujeitoprogramador.com/nutriapp/wp-content/uploads/2017/12/Screenshot_3-2.jpg",
    // "subtitulo": "O que acontece com nossos músculos quando estamos dormindo Muitas pessoas pensam que o ganho de massa muscular ocorre dentro da academia, quando estamos treinando pesado. O inchaço do treino e pós-treino dá a impressão que estamos evoluindo, mas isto não passa de...",
    // "categoria": "Deita"
    if(vl){
        vl.map( (item) =>{
            console.log(item);
            let liElement = document.createElement("li");
            let titleElement = document.createElement("strong");
            let imgElement = document.createElement("img");
            let descriptionElement = document.createElement("a");
            
            let titleTxt = document.createTextNode(item.titulo);
            titleElement.appendChild(titleTxt);
            liElement.append(titleElement);
            
            imgElement.src = item.capa;
            liElement.appendChild(imgElement);

            let descriptionTxt = document.createTextNode(item.subtitulo);
            descriptionElement.appendChild(descriptionTxt);
            liElement.appendChild(descriptionElement);

            listElement.appendChild(liElement);
        })

    }else{
        
        console.log('Erro ! o valor está indefinido ::> ', vl);
    }

};


appNutricao();