const emojis = document.querySelectorAll(".emoji");
const sendBtn = document.getElementById("send-btn");
const resultSelected = document.getElementById("container");

let emojiElegido = "";

emojis.forEach((emoji) => {
  emoji.addEventListener("click", (event) => {
    removeActive();
    emojiElegido =
      event.target.innerText || event.target.parentNode.textContent;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

sendBtn.addEventListener("click", () => {
  if (emojiElegido !== "") {
    resultSelected.innerHTML = `
        <strong class="title"> Gracias! </strong>
        <br/>
        <br/>
        <p class="opinión"> Opinión: ${emojiElegido} </p>
        <br/>

        <p class="agradecimiento"> Agradecemos su respuesta, nos ayuda para seguir mejorando nuestros servicios.</p>
        `;
  }
});

function removeActive() {
  emojis.forEach((emoji) => {
    emoji.classList.remove("active");
  });
}
