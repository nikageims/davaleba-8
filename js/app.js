   // 24 საათი წამებში
    let countdown = 24 * 60 * 60;

    const hourElem = document.querySelector(".hour");
    const minElem  = document.querySelector(".min");
    const secElem  = document.querySelector(".sec");

    function updateCountdown() {
        let hours = Math.floor(countdown / 3600);
        let minutes = Math.floor((countdown % 3600) / 60);
        let seconds = countdown % 60;

        hourElem.textContent = hours.toString().padStart(2, "0");
        minElem.textContent  = minutes.toString().padStart(2, "0");
        secElem.textContent  = seconds.toString().padStart(2, "0");

        if (countdown > 0) countdown--;
    }

    updateCountdown(); // პირველი გაშვება
    setInterval(updateCountdown, 1000);
