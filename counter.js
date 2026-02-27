(() => {
      const clickHandler = (e) => {
            if (!e.target.classList.contains("js-button")) {
                  return
            }
            if (e.target.id === "js-addCounter-button") {
                  const counter = e.target.closest(".counter");
                  const newCounter = counter.cloneNode(true);

                  newCounter.querySelector(".counter-number").textContent = 0;

                  counter.parentElement.append(newCounter);
                  return
            }
            const targetButton = e.target;
            const counter = e.target.closest(".counter");
            const numberEl = counter.querySelector(".counter-number");
            let currentCount = parseInt(numberEl.textContent);
            if (targetButton.textContent === "+") {
                  numberEl.textContent = currentCount + 1;
            } else {
                  numberEl.textContent = currentCount - 1;
            }
      }

      document.body.addEventListener("click", clickHandler);
})();