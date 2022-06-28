let taskInput = document.getElementById("addTask");
let taskButton = document.querySelector('#inputaddTask button');
let listTask = document.getElementById('listTask');
let taskList = [];
let redenTaskList = [];

function verificarNovaTarefa(){
    if(!taskInput.value){
        alert('Favor digitar uma nova tarefa!');
        return false;
    }else{
        taskList.push(taskInput.value);
        taskInput.value = "";
        addNovaTarefa();
    }
}

function addNovaTarefa(){
    listTask.innerHTML = "";
    redenTaskList = localStorage.getItem("taskList");
    
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
    localStorage.setItem("taskList", JSON.stringify(taskList));
    console.log('redenTaskList :>> ', redenTaskList);
    });

}

function exluirTask(position){
    taskList.splice( position, 1);
    addNovaTarefa();
}

taskButton.onclick = verificarNovaTarefa;