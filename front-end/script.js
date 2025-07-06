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
   