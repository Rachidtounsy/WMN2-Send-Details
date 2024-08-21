document.getElementById('wmn2Form').addEventListener('submit', function(e) {
    e.preventDefault();

    let formData = new FormData(this);
    let output = {};

    formData.forEach((value, key) => {
        output[key] = value;
    });

    console.log('Form Data Submitted: ', output);
    alert('Form submitted successfully!');
    // Here you can add further processing, such as sending data to a server
});
