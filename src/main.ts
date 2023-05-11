
// Defines the constants for the task
const addBtn = (document.getElementById("añadir") as HTMLInputElement)
const substractBtn = (document.getElementById("restar") as HTMLInputElement);
const resetBtn = (document.getElementById("reiniciar") as HTMLInputElement);
const btn1 = (document.getElementById("number") as HTMLInputElement);
const sendNumber = (document.getElementById("btn1") as HTMLButtonElement);
const pCount = (document.getElementById("count") as HTMLInputElement);

let turno = 0;

// Adds a number
function add(){
  if (addBtn !==null && addBtn !== undefined)
  turno++
  pCount.innerHTML = turno.toString().padStart(2, "0");
}

// Substracts a number
function substract(){
  if (substractBtn !==null && substractBtn !== undefined)
  turno--
    pCount.innerHTML = turno.toString().padStart(2, "0");
}

// Resets to value '0'
function reset(){
  if (resetBtn !==null && resetBtn !== undefined)
  turno = 0;
  pCount.innerHTML = turno.toString().padStart(2, "0");
}

// Adds a number typed manually within the dialog box
function fun1() {
  if (btn1 !==null && btn1 !== undefined)
  pCount.innerHTML = btn1.value.padStart(2, "0")
}

// 'EventListeners used to call the functions to perform a pre-defined task
addBtn.addEventListener("click", add)
substractBtn.addEventListener("click", substract)
resetBtn.addEventListener("click", reset)
sendNumber.addEventListener("click", fun1)