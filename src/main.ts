// Defines the constants for the task
const addBtn = document.getElementById("añadir");
const substractBtn = document.getElementById("restar");
const resetBtn = document.getElementById("reiniciar");
const btn1 = document.getElementById("number");
const sendNumber = document.getElementById("btn1");
const count = document.getElementById("count");

let turn = 0;

// 'EventListeners used to call the functions to perform a pre-defined task
if (addBtn && addBtn instanceof HTMLButtonElement){
  addBtn.addEventListener("click", add);
};

if (substractBtn && substractBtn instanceof HTMLButtonElement) {
  substractBtn.addEventListener("click", substract)
};

if (resetBtn && resetBtn instanceof HTMLButtonElement) {
  resetBtn.addEventListener("click", reset)
};

if (sendNumber && sendNumber instanceof HTMLButtonElement) {
  sendNumber.addEventListener("click", addNumberManually)
};

// Adds a number
function add(): void{
  if (count && count instanceof HTMLParagraphElement){
    turn++
    count.innerHTML = `${turn}`.padStart(2, "0");
  }
};

// Substracts a number
function substract(): void{
  if (count && count instanceof HTMLParagraphElement) {
  turn--
    count.innerHTML = `${turn}`.padStart(2, "0");
  }
};

// Resets to value '0'
function reset(): void{
  if (count && count instanceof HTMLParagraphElement) {
  turn = 0;
  count.innerHTML = `${turn}`.padStart(2, "0");
  }
  resetInput();
};

// Adds a number typed manually within the dialog box
function addNumberManually(): void {
  if (count && count instanceof HTMLParagraphElement) {
  count.innerHTML = getNumber().padStart(2, "0")
  mapInput();
  }
};

function mapInput() {
  if (btn1 && btn1 instanceof HTMLInputElement)
  turn = parseInt(btn1.value);
};

function getNumber(): string {
  if (btn1 && btn1 instanceof HTMLInputElement) {
    return btn1.value;
    }
    return `${turn}`
};

function resetInput() {
  if (btn1 && btn1 instanceof HTMLInputElement){
    btn1.value = ``;
  }
};