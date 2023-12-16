const { response } = require("express");

const dosenNip ='19501020';
const updateData = {
    nama: 'Irawan',
    gender: 'L',
    prodi: 'TI',
    alamat: 'Cibatu'
};

fetch(`http://localhost:3000/dosen/${dosenNip}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
}).then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error', error));
