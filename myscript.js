<script>
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (validateForm()) {
        alert('Form submitted successfully');
      }
    });

    function validateForm() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (name.trim() === '') {
        alert('Name field is required');
        return false;
      }

      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return false;
      }

      if (message.trim() === '') {
        alert('Message field is required');
        return false;
      }

      return true;
    }
  });
</script>