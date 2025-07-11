const input = document.getElementById("input");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

const display = document.querySelector("p");

let countdown; 
let timeLeft = 0;


startBtn.addEventListener("click", () => {
  const value = parseInt(input.value);

  if (isNaN(value) || value <= 0) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  timeLeft = value;
  display.textContent = `${timeLeft} second left`;

  clearInterval(countdown);

  countdown = setInterval(() => {
    timeLeft--;

    if (timeLeft > 0) {
      display.textContent = `${timeLeft} second left`;
    } else {
      clearInterval(countdown);
      display.textContent = "Time's up!";
    }
  }, 1000);
});

resetBtn.addEventListener("click", () => {
  clearInterval(countdown);
  display.textContent = "";
  input.value = "";
});

