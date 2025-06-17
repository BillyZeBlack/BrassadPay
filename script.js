function submitForm(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  if (email) {
    document.getElementById("confirmation").innerText = "🔥 Merci ! Tu es sur la liste. Stay tuned.";
    document.getElementById("email").value = "";
  }
}
