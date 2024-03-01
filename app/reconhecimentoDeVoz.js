const elementKick = document.getElementById("kick");
let speakStart = null;

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  const chute = e.results[0][0].transcript;
  showKickScreen(chute);
  checkTheKick(chute);
  speakStart = chute;
}

function showKickScreen(value) {
  elementKick.innerHTML = `
      <div>Você disse</div>
      <span class="box">${value.replace(/\.$/, "")}</span>
  `;
}

recognition.addEventListener("end", () => {
  if (speakStart == numberSecret) recognition.stop();
  else recognition.start();
});
