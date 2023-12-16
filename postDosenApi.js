const { response } = require("express");

const postData = {
    nip: '19501021',
    nama: 'Kurniawan',
    gender: 'L',
    prodi: 'TE',
    alamat: 'Cibolang'
};

fetch('http://localhost:3000/dosen', {  
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error('Error', error));