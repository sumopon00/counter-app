(() => {
      const clickHandler = (e) => {
            if (!e.target.classList.contains("js-button")) {
                        return
                  }

            if (e.target.id === "js-reset-button") {
                        const counter = e.target.closest(".counter")
                        const numberEl = counter.querySelector(".counter-number");
                        numberEl.textContent = 0;
                        return
                  }
}
      document.body.addEventListener("click", clickHandler);
})();