
// Defines the constants for the task
const addBtn = document.getElementById("añadir");
const substractBtn = document.getElementById("restar");
const resetBtn = document.getElementById("reiniciar");
const btn1 = document.getElementById("number");
const sendNumber = document.getElementById("btn1");
const pCount = document.getElementById("count");

let turno = 0;

// Adds a number
function add(){
  if (pCount !==null && pCount !== undefined && pCount instanceof HTMLParagraphElement){
  turno++
  pCount.innerHTML = `${turno}`.padStart(2, "0");
  } 
}

// Substracts a number
function substract(){
  if (pCount !==null && pCount !== undefined && pCount instanceof HTMLParagraphElement) {
  turno--
    pCount.innerHTML = `${turno}`.padStart(2, "0");
  }
}

// Resets to value '0'
function reset(){
  if (pCount !==null && pCount !== undefined && pCount instanceof HTMLParagraphElement) {
  turno = 0;
  pCount.innerHTML = `${turno}`.padStart(2, "0");
  }
}

// Adds a number typed manually within the dialog box
function fun1() {
  if (pCount !==null && pCount !== undefined && pCount instanceof HTMLParagraphElement) {
  pCount.innerHTML = getNumber().padStart(2, "0")
  }
}

function getNumber() {
  if (btn1 !==null && btn1 !== undefined && btn1 instanceof HTMLInputElement) {
    return btn1.value;
    }
    return ""
}

// 'EventListeners used to call the functions to perform a pre-defined task
if (addBtn !==null && addBtn !== undefined && addBtn instanceof HTMLButtonElement){
  addBtn.addEventListener("click", add);
}

if (substractBtn !==null && substractBtn !== undefined && substractBtn instanceof HTMLButtonElement) {
  substractBtn.addEventListener("click", substract)
}

if (resetBtn !==null && resetBtn !== undefined && resetBtn instanceof HTMLButtonElement) {
  resetBtn.addEventListener("click", reset)
}

if (sendNumber !==null && sendNumber !== undefined && sendNumber instanceof HTMLButtonElement) {
  sendNumber.addEventListener("click", fun1)
}