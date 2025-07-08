const sideNav = document.querySelector('.js-sidebar');

function showNavbar(){
    sideNav.style.left ='0';
}
function hideNavbar(){
    sideNav.style.left ='-50%';
}
   document.getElementById('contactForm').addEventListener('submit', function(event) {
       event.preventDefault(); // Prevent the default form submission

       const formData = new FormData(this);
       const data = Object.fromEntries(formData.entries());

       fetch('/submit-form', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(data),
       })
       .then(response => {
           if (response.ok) {
               alert('Form submitted successfully!');
               this.reset(); // Reset the form
           } else {
               alert('Error submitting form');
           }
       })
       .catch(error => {
           console.error('Error:', error);
           alert('Error submitting form');
       });
   });
   // Sample credentials (for demonstration purposes only)
const validUsername = "user";
const validPassword = "password";

// Handle login form submission
document.querySelector(".loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.querySelector(".username").value;
    const password = document.querySelector(".password").value;

    // Check credentials
    if (username === validUsername && password === validPassword) {
        // Successful login
        document.querySelector(".loginMessage").textContent = "Login successful!";
        document.querySelector(".loginFormContainer").style.display = "none";
        document.querySelector(".contactFormContainer").style.display = "block";
    } else {
        // Failed login
        document.querySelector(".loginMessage").textContent = "Invalid username or password.";
    }
});

// Handle contact form submission
document.querySelector(".contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Here you can handle the form submission to the backend
    const formData = new FormData(this);
    fetch('/submit-form', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
            this.reset(); // Reset the form
        } else {
            alert('Error submitting form.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
