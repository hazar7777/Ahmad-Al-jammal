function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phn').value;
    const location = document.getElementById('loc').value;
    const message = document.getElementById('mess').value;

    if (name && email && phoneNumber && location && message) {
        alert("Form submitted successfully!");
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phn').value = '';
        document.getElementById('loc').value = 'Atlanta';          
        document.getElementById('mess').value = '';
    } else {
        alert("Error: Please fill in all fields.");
    }
}