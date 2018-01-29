// document.addEventListener("DOMContentLoaded", function(event) {
//
//
//   $('#contact-form').submit(function(e) {
//       var first_name = document.getElementById('inputFirstName');
//       var last_name = document.getElementById('inputLastName');
//       var email = document.getElementById('inputEmail');
//       var number = document.getElementById('inputNumber');
//       var message = document.getElementById('inputMessage');
//
//       if (!first_name.value || !last_name.value || !email.value || !number.value || !message.value) {
//         e.preventDefault()
//         alertify.error("Please Check Your entries")
//       } else {
//         $.ajax({
//           url: "https://formspree.io/naderabouezze93@gmail.com",
//           method: "POST",
//           data: $(this).serialize(),
//           dataType: "json"
//   });
//         e.preventDefault()
//         $(this).get(0).reset()
//         alertify.success('Message Sent')
//       }
//     })
// });
