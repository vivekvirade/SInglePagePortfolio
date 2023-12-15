 //Loading Effect
 document.addEventListener('DOMContentLoaded', function () {
    // Hide the loading overlay after 10 seconds
    setTimeout(function () {
      document.getElementById('loading-overlay').style.display = 'none';
    }, 1000);
  });
  // Your custom JavaScript code goes here
  
 // home page Full-Stact web Dev design
  document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('text-container','text-container1');
    const text = textContainer.innerText;
    let index = 0;
    let fontSize = 54;

    function updateText() {
      textContainer.innerText = text.slice(0, index);
      index++;

      if (index > text.length) {
        index = 0; // Reset the index when it reaches the end
      }

      setTimeout(updateText, 100); // Adjust the delay (in milliseconds) as needed
    }

    updateText();
  });

  
  
//one by one word show  
document.addEventListener('DOMContentLoaded', function () {
          const textContainer = document.getElementById('text-container1');
          const texts = ["Software Developer", "Web Enthusiast","Your ideas. Our code."];
          let index = 0;

          function updateText() {
              const text = texts[index % texts.length];
              textContainer.innerText = text;

              ++index;

              setTimeout(() => {
                  textContainer.style.animation = 'none'; // Pause animation
                  setTimeout(() => {
                      textContainer.style.animation = ''; // Resume animation
                      updateText();
                  }, 10); // A small delay before resuming animation
              }, 3000); // Display each text for 3 seconds

          }

          updateText();
      });
      function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic form validation
  if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
  }

  // Log the form data (in a real-world scenario, you'd send this to the server)
  console.log('Form Data:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // You can add additional logic here, such as sending the form data to the server
  // Create a WhatsApp link with the form data
  const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  const whatsappLink = `https://wa.me/918432077959?text=${encodeURIComponent(whatsappMessage)}`;

  // Open WhatsApp in a new tab or window
  window.open(whatsappLink);
  // For demonstration purposes, we'll just log the data to the console
  alert('Form submitted successfully!');
}function openEmailForm() {
  var name = "Vivek Virade"; // Replace with the default name
  var email = "vvirade@gmail.com"; // Replace with the default email address
  var subject = "Regarding your website"; // Replace with the default subject
  var body = "Dear Vivek,\n Name: \nEmail: \nTelephone: \nMessage: \nAddress: \n\nI would like to get in touch with you regarding your website.\n\nSincerely,\n[Your Name]"; // Replace with the default body

  var mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}
