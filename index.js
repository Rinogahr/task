let taskInput = document.getElementById("addTask");
let taskButton = document.querySelector('#inputaddTask button');
let listTask = document.getElementById('listTask');
let taskList = JSON.parse(localStorage.getItem("@taskList")) || [];

function verificarNovaTarefa(){
    if(!taskInput.value){
        alert('Favor digitar uma nova tarefa!');
        return false;
    }else{
        taskList.push(taskInput.value);
        taskInput.value = "";
        addNovaTarefa();
        salvarDados();
    }
}

function addNovaTarefa(){
    listTask.innerHTML = "";

    try {
        taskList.map( ( todo ) => {
            let valor = todo.replace(/ /g, "");
            let divTaskPai = document.createElement("div");
            divTaskPai.className = "taskConteiner";
            divTaskPai.id = valor;
            let position = taskList.indexOf(todo);
            divTaskPai.innerHTML = `
            <div>
                <ul>
                    <li>
                        <label for="*">${todo}</label>
                    </li>
                </ul>
            </div>
            <div id="trashButton" classe="trashButton">
                <div>
                    <button onclick="exluirTask(${position})">Esxcluir Tarefa</button>
                </div>
                <div>
                    <img src="./img/trash.png" alt="Example1" width="40" height="40">
                </div>
            </div>
        `;
        listTask.appendChild(divTaskPai);
    });
    } catch (error) {
        console.log("Não foi possivel renderizar a lista de tarefa motivo ::>  ", error);
    }

}

// addNovaTarefa();

function exluirTask(position){
    taskList.splice( position, 1);
    addNovaTarefa();
    salvarDados();
}

function salvarDados(){
    localStorage.setItem("@taskList", JSON.stringify(taskList));
}

taskButton.onclick = verificarNovaTarefa;