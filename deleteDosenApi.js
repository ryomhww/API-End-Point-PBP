const { response } = require("express");

const mahasiswaNipToDelete = '19501021';

fetch(`http://localhost:3000/dosen/${mahasiswaNipToDelete}`, {
    method: 'DELETE'
}).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error', error));