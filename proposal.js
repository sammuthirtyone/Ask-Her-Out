document.addEventListener("DOMContentLoaded", function () {
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");

  const messages = [
    "Are you sure?",
    "Please nah?",
    "Plilise request 🥺",
    "Okay now both are Yes hehe"
  ];

  let i = 0;
  noBtn.addEventListener("click", () => {
    if (i < messages.length - 1) {
      noBtn.textContent = messages[i];
      i++;
    } else {
      noBtn.style.display = "none";
      yesBtn.textContent = "Yes 💘";
      yesBtn.style.width = "200px";
    }
  });

  yesBtn.addEventListener("click", () => {
    window.location.href = "final.html";
  });
});
