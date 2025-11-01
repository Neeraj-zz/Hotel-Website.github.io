// Set target date (adjust this date to match your offer)
    const countdownDate = new Date("Dec 31, 2025 23:59:59").getTime();

    function updateTimer() {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerHTML = days + "<span>DAYS</span>";
      document.getElementById("hours").innerHTML = hours + "<span>HRS</span>";
      document.getElementById("minutes").innerHTML = minutes + "<span>MINS</span>";
      document.getElementById("seconds").innerHTML = seconds + "<span>SECS</span>";
    }

    setInterval(updateTimer, 1000);
    updateTimer();