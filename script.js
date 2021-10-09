// DOM element references
let stop = document.querySelector("#stop");
let play = document.querySelector("#play");

const tasksList = document.getElementById("task-list")

function secondCounter() {
  let min = document.querySelector("#min");
  min = +min.textContent
  let seg = document.querySelector("#seg");
  seg = +seg.textContent

  if(seg+1 == 60) {
    min += 1;
    seg = 0;
  } else 
    seg += 1
    
  return { 
    min : ("" + min).padStart(2, "0"),
    seg : ("" + seg).padStart(2, "0") 
  }
}

// RETORNAR TEMPO ATUAL DO TIMER
function getTime() {
  let min = document.querySelector("#min").textContent;
  let seg = document.querySelector("#seg").textContent;

  min = min.padStart(2, "0")
  seg = seg.padStart(2, "0")
  
  return (min + ":" + seg);
}

// Função que cria elementos 
const addTask = (task) => {
  let taskContainer = document.createElement('li')
  taskContainer.classList.add("task-item")

  let taskTitle = document.createElement('h2');
  taskTitle.classList.add("task-title");
  taskTitle.textContent = task.title;
  
  let taskTime = document.createElement('p');
  taskTime.classList.add("task-time")
  taskTime.textContent = task.time;

  taskContainer.appendChild(taskTitle)
  taskContainer.appendChild(taskTime)

  tasksList.appendChild(taskContainer)

  // Zerar valores
  document.getElementById("task").value = "";

  document.querySelector("#seg").textContent = "00";
  document.querySelector("#min").textContent = "00";
}


// EVENT LISTENERS - Botões iniciar / parar
play.addEventListener("click", ({target})=>{ 
  play.classList.toggle("hidden")   
  stop.classList.toggle("hidden")   

  window.intervalCounter =  setInterval( () => {
    let {min, seg} = secondCounter()

    document.querySelector("#seg").textContent = ""+seg
    document.querySelector("#min").textContent = ""+min

  }, 1000)
})

stop.addEventListener("click", ({target})=>{ 
  clearInterval(intervalCounter);
  play.classList.toggle("hidden")   
  stop.classList.toggle("hidden")   

  let time = getTime();
  let title = document.getElementById("task").value;
  
  // Adiciona conteúdo à DOM
  addTask({ title, time })

  console.log("END")
})