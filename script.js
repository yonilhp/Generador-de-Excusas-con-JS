// Excusas para cada botón
const excuses = {
    myDog: ["Mi perro se comió mi tarea.", "No pude hacerlo porque estaba paseando a mi perro."],
    eat: ["No pude hacerlo porque estaba comiendo.", "Olvidé hacerlo mientras preparaba la cena."],
    myHomework: ["Dejé mi tarea en casa.", "Perdí mi cuaderno de tareas."],
    yesterday: ["Lo siento, olvidé hacerlo ayer.", "Tuve problemas con mi conexión a Internet ayer."]
  };
  
  // Función para obtener una excusa aleatoria
  function getRandomExcuse(excuseArray) {
    return excuseArray[Math.floor(Math.random() * excuseArray.length)];
  }
  
  // Asociar función al evento click de cada botón
  document.getElementById("myDogBtn").addEventListener("click", function() {
    document.getElementById("excuseOutput").textContent = getRandomExcuse(excuses.myDog);
  });
  
  document.getElementById("eatBtn").addEventListener("click", function() {
    document.getElementById("excuseOutput").textContent = getRandomExcuse(excuses.eat);
  });
  
  document.getElementById("myHomeworkBtn").addEventListener("click", function() {
    document.getElementById("excuseOutput").textContent = getRandomExcuse(excuses.myHomework);
  });
  
  document.getElementById("yesterdayBtn").addEventListener("click", function() {
    document.getElementById("excuseOutput").textContent = getRandomExcuse(excuses.yesterday);
  });
  