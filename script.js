let loopMessages = [
  "Are you sure? 😢",
  "Please Nah 😔",
  "Plilise request 🥺",
  "You can only say YES now 🌷"
];
let currentLoop = 0;

function startLove() {
  showPage("page1", "page2");
}

function showProposal() {
  showPage("page2", "proposal");
}

function yesLove() {
  showPage("proposal", "final");
}

function noLove() {
  showPage("proposal", "loop");
  currentLoop = 0;
  document.getElementById("loopMsg").innerText = loopMessages[currentLoop];
}

function nextLoop() {
  currentLoop++;
  if (currentLoop < loopMessages.length) {
    document.getElementById("loopMsg").innerText = loopMessages[currentLoop];
  } else {
    showPage("loop", "final");
  }
}

function showPage(hideId, showId) {
  document.getElementById(hideId).classList.remove("show");
  document.getElementById(hideId).classList.add("hidden");
  document.getElementById(showId).classList.remove("hidden");
  document.getElementById(showId).classList.add("show");
}

// Start page1 on load
window.onload = () => {
  document.getElementById("page1").classList.add("show");
};
