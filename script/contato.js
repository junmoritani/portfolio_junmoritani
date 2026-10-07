let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
  document.getElementById("background-overlay").classList.remove("hidden");
}

function closePopup() {
  popup.classList.remove("open-popup");
  document.getElementById("background-overlay").classList.add("hidden");
}

async function handleFormSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("form-contact");
  document.getElementById("background-overlay").classList.remove("hidden");
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    });

    if (response.ok) {
      openPopup();
      form.reset();
    } else {
      console.error("Form submission failed.");
      document.getElementById("background-overlay").classList.add("hidden");
      alert("Something went wrong. Please try email instead.");
    }
  } catch (error) {
    console.error("Form submission failed.", error);
    document.getElementById("background-overlay").classList.add("hidden");
    alert("Something went wrong. Please try email instead.");
  }
}

const dataContact = {
  english: {
    title: "GET IN TOUCH",
    name: "Name",
    email: "Email",
    message: "How can I help you?",
    send: "SEND",
    msgInfo: "or send an email to",
    msgThankYou: "Thank you!",
    msgRespond: "I’ll get back to you soon.",
  },
  portuguese: {
    title: "ENTRE EM CONTATO",
    name: "Nome",
    email: "Email",
    message: "Como posso te ajudar?",
    send: "ENVIAR",
    msgInfo: "ou envie um email para",
    msgThankYou: "Obrigado!",
    msgRespond: "Responderei assim que possível.",
  },
};

function updateContentContact(language) {
  const pack = dataContact[language];
  const title = document.getElementById("title");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const labelName = document.getElementById("label-name");
  const labelEmail = document.getElementById("label-email");
  const labelMessage = document.getElementById("label-message");
  const btSubmit = document.getElementById("btSubmit");
  const msgInfo = document.getElementById("msgInfo");
  const msgThankYou = document.getElementById("msgThankYou");
  const msgRespond = document.getElementById("msgRespond");

  if (title) title.textContent = pack.title;
  if (labelName) labelName.textContent = pack.name;
  if (labelEmail) labelEmail.textContent = pack.email;
  if (labelMessage) labelMessage.textContent = pack.message;
  if (name) name.placeholder = pack.name;
  if (email) email.placeholder = pack.email;
  if (message) message.placeholder = pack.message;
  if (btSubmit) btSubmit.textContent = pack.send;
  if (msgInfo) msgInfo.textContent = pack.msgInfo;
  if (msgThankYou) msgThankYou.textContent = pack.msgThankYou;
  if (msgRespond) msgRespond.textContent = pack.msgRespond;
}

document.addEventListener("DOMContentLoaded", () => {
  const selectedLanguage =
    localStorage.getItem("selectedLanguage") || "english";
  updateContentContact(selectedLanguage);
});
