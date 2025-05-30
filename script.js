function scrollToPreorder() {
  document.getElementById("preorder").scrollIntoView({ behavior: "smooth" });
}

function submitPreorder(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  if (email) {
    document.getElementById("confirmation").style.display = "block";
  }
}

const carousel = document.getElementById("carousel");
function scrollCarousel(direction) {
  const scrollAmount = 310;
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
