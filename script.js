const display = document.getElementById("display");
function appendToDisplay(key) {
  display.value += key;
}
function clearDisplay() {
  display.value = "";
}
function BackSpace() {
  if (display.value === "Error") {
    clearDisplay();
  }
  display.value = display.value.slice(0, display.value.length - 1);
}
function calculate() {
  try {
    if (display.value === "Error") {
      throw error;
    }
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
