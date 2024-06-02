let popup = document.getElementById("popup");
function openPopup(){
  popup.classList.add("open-popup");
  document.getElementById('background-overlay').classList.remove('hidden');
}

function closePopup(){
  popup.classList.remove("open-popup");
  document.getElementById('background-overlay').classList.add('hidden');
}

async function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = document.getElementById('form-contact');
    document.getElementById('background-overlay').classList.remove('hidden');
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form)
      });

      if (response.ok) {
        // Form submission was successful
        openPopup()
        form.reset(); // Clear the form fields
      } else {
        // Handle errors here
        console.error('Form submission failed.');
        alert("error")
        document.getElementById('background-overlay').classList.add('hidden');
      }
    } catch (error) {
      // Handle errors here
      console.error('Form submission failed.', error);
    }
  }

