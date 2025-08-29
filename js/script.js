document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("orderForm");

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // prevent real submit for now

      const name = document.getElementById("name").value;
      const flavour = document.getElementById("flavour").value;
      const qty = document.getElementById("quantity").value;

      alert(`Thanks, ${name}! 🎉 Your order of ${qty} ${flavour}(s) has been received!`);
      form.reset();
    });
  }
});
