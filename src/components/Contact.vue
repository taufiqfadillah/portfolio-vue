<template>
  <div class="section-box mt-4" id="contact">
    <div class="row">
      <div class="col-12 col-md-10 col-xl-8">
        <h6 class="title-heading mb-3" data-backdrop-text="Contact">Get In Touch</h6>
        <h1>Let's Connect</h1>
        <p>Let's connect! Reach out for inquiries or collaborations in the web development and freelancing field.</p>
        <ul class="list-inline-pills mt-4">
          <li>Phone: +62 851 7540 8518</li>
          <li>Email: admin@taufiqproject.my.id</li>
          <li>Address: Jalan Menjangan 50c, Yogyakarta</li>
        </ul>
      </div>
    </div>
    <!-- end row -->
    <div class="mt-4 mt-lg-5">
      <!-- Contact Form -->
      <div class="contact-form">
        <form method="post" id="contact-form">
          <div class="row gx-3 gy-0">
            <div class="col-12 col-md-6">
              <input type="text" id="name" name="name" placeholder="Name" required />
            </div>
            <div class="col-12 col-md-6">
              <input type="email" id="email" name="email" placeholder="E-Mail" required />
            </div>
          </div>
          <input type="text" id="subject" name="subject" placeholder="Subject" required />
          <textarea name="message" id="message" placeholder="Message"></textarea>
          <button class="button button-md" type="submit">Send Message</button>
        </form>
        <!-- Submit result -->
        <div class="submit-result">
          <div id="response-message" class="mt-3"></div>
        </div>
      </div>
      <!-- end contact-form -->
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
  setup() {
    onMounted(() => {
      $('#contactform').on('submit', function (e) {
        var t = $('#name').val(),
          a = $('#email').val(),
          o = $('#subject').val(),
          i = $('#message').val();
        '' === t && $('#name').addClass('error-color'),
          '' === a && $('#email').addClass('error-color'),
          '' === o && $('#subject').addClass('error-color'),
          '' === i
            ? $('#message').addClass('error-color')
            : ($.ajax({
                url: 'assets/php/contact-form.php',
                data: $(this).serialize(),
                type: 'POST',
                success: function (e) {
                  $('#success').addClass('show-result'),
                    $('#contactform').each(function () {
                      this.reset();
                    });
                },
                error: function (e) {
                  $('#error').addClass('show-result');
                },
              }),
              $('#contactform input, #contactform textarea').removeClass('error-color')),
          e.preventDefault();
      });
      document.addEventListener('DOMContentLoaded', function () {
        const contactForm = document.getElementById('contact-form');
        const responseMessage = document.getElementById('response-message');

        contactForm.addEventListener('submit', function (e) {
          e.preventDefault();

          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const subject = document.getElementById('subject').value;
          const message = document.getElementById('message').value;

          const formData = new FormData();
          formData.append('name', name);
          formData.append('email', email);
          formData.append('subject', subject);
          formData.append('message', message);

          fetch('https://formspree.io/f/xrgnbpzj', {
            method: 'POST',
            body: formData,
            headers: {
              Accept: 'application/json',
            },
          })
            .then((response) => {
              if (response.ok) {
                responseMessage.innerHTML = '<p class="text-success">Thank you for your message! We will get back to you soon.</p>';
                responseMessage.classList.add('success');
                contactForm.reset();
              } else {
                responseMessage.innerHTML = '<p class="text-danger">Oops! Something went wrong. Please try again later.</p>';
                responseMessage.classList.add('error');
              }
            })
            .catch((error) => {
              console.error('Error sending form data:', error);
              responseMessage.innerHTML = '<p class="text-warning">Oops! Something went wrong. Please try again later.</p>';
              responseMessage.classList.add('error');
            });
        });
      });
    });
  },
};
</script>
