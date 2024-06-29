const legalLink = document.getElementById("legal");
const teamLink = document.getElementById("team");
const specialLink = document.getElementById("special");

const legalList = document.getElementById("legal-cards");
const teamList = document.getElementById("team-cards");
const specialList = document.getElementById("special-cards");

legalLink.addEventListener("click", () => {
  legalLink.classList.add("active-mine");
  specialLink.classList.remove("active-mine");
  teamLink.classList.remove("active-mine");

  legalList.classList.remove("hidden");
  specialList.classList.add("hidden");
  teamList.classList.add("hidden");
});

teamLink.addEventListener("click", () => {
  legalLink.classList.remove("active-mine");
  specialLink.classList.remove("active-mine");
  teamLink.classList.add("active-mine");

  legalList.classList.add("hidden");
  specialList.classList.add("hidden");
  teamList.classList.remove("hidden");
});

specialLink.addEventListener("click", () => {
  legalLink.classList.remove("active-mine");
  specialLink.classList.add("active-mine");
  teamLink.classList.remove("active-mine");

  legalList.classList.add("hidden");
  specialList.classList.remove("hidden");
  teamList.classList.add("hidden");
});

// legalLink.addEventListener("click", () => {
//   legalLink.classList.add("active-mine");
//   legalList.classList.remove("hidden");
// });
