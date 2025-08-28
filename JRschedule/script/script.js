document.addEventListener("DOMContentLoaded", () => {
  const dayButtons = document.querySelectorAll(".day");
  const timetables = document.querySelectorAll(".timetable");

  dayButtons.forEach((button) => {
    button.addEventListener("click", () => {
      dayButtons.forEach((btn) => btn.classList.remove("active"));

      timetables.forEach((tt) => tt.classList.remove("show"));

      button.classList.add("active");

      const dayId = button.getAttribute("data-day");
      document.getElementById(dayId).classList.add("show");
    });
  });
});
