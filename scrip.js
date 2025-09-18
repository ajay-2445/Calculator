
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".entry input");
  const buttons = document.querySelectorAll("button");

  let currentValue = "";

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.textContent.trim();

      if (btn.id === "ac") {
        
        currentValue = "";
        input.value = "";
      } else if (btn.querySelector(".fa-arrow-left")) {
        
        currentValue = currentValue.slice(0, -1);
        input.value = currentValue;
      } else if (btn.id === "equal") {
        try {
          
          let expression = currentValue
            .replace(/×|x|X|✕/g, "*")
            .replace(/÷|:/g, "/")
            .replace(/%/g, "/100");
          currentValue = eval(expression).toString();
          input.value = currentValue;
        } catch {
          input.value = "Error";
          currentValue = "";
        }
      } else {
        
        if (btn.querySelector(".fa-plus")) currentValue += "+";
        else if (btn.querySelector(".fa-minus")) currentValue += "-";
        else if (btn.querySelector(".fa-divide")) currentValue += "/";
        else if (btn.querySelector(".fa-xmark")) currentValue += "*";
        else currentValue += value;

        input.value = currentValue;
      }
    });
  });
});
