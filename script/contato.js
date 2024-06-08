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
  event.preventDefault(); // Prevent the default form submission

  const form = document.getElementById("form-contact");
  document.getElementById("background-overlay").classList.remove("hidden");
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    });

    if (response.ok) {
      // Form submission was successful
      openPopup();
      form.reset(); // Clear the form fields
    } else {
      // Handle errors here
      console.error("Form submission failed.");
      alert("error");
      document.getElementById("background-overlay").classList.add("hidden");
    }
  } catch (error) {
    // Handle errors here
    console.error("Form submission failed.", error);
  }
}

let dataContact = {
  english: {
    title: "GET IN TOUCH",
    name: "name",
    email: "email",
    message: "how can I help you?",
    send: "SEND",
    msgInfo: "or send an email to",
    msgThankYou: "Thank You!",
    msgRespond: "I will respond you soon. Thanks!",
  },
  portuguese: {
    title: "ENTRE EM CONTATO",
    name: "nome",
    email: "email",
    message: "como posso te ajudar?",
    send: "ENVIAR",
    msgInfo: "ou mande um email para",
    msgThankYou: "Obrigado!",
    msgRespond: "Responderei assim que possível. Até logo!",
  },
};

function updateContentContact(language) {
  const title = document.getElementById("title");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const btSubmit = document.getElementById("btSubmit");
  const msgInfo = document.getElementById("msgInfo");
  const msgThankYou = document.getElementById("msgThankYou");
  const msgRespond = document.getElementById("msgRespond");

  // Fetch data for the selected language
  const data = dataContact[language];

  // Update the content
  title.innerHTML = data.title;
  name.placeholder = data.name;
  email.placeholder = data.email;
  message.placeholder = data.message;
  btSubmit.innerHTML = data.send;
  msgInfo.innerHTML = data.msgInfo;
  msgThankYou.innerHTML = data.msgThankYou;
  msgRespond.innerHTML = data.msgRespond;
}

// Function to load language preference on page load
function loadLanguagePreferenceContact() {
  const selectedLanguage =
    localStorage.getItem("selectedLanguage") || "english"; // Default to English if not set
  updateContentContact(selectedLanguage);
}

// Call loadLanguagePreference on page load
document.addEventListener("DOMContentLoaded", function () {
  loadLanguagePreferenceContact();
});
