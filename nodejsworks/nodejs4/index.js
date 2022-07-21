const fs = require('fs');


// ! Dosya yazmak
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log('File Created Successfully');//Dosya Başarılı bir şekilde oluşturuldu
})

// ! Dosya okumak
fs.readFile('employees.json', 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log('Read File');//Dosya okundu
}) 

// ! Veri ekleme

fs.appendFile('employees.json', '\n {"name": "Employee 2 Name", "salary": 3000}', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log('Data Updated');//Veri Güncellendi
})

// ! Dosya Silme
fs.unlink('employees.json', (err) => {
        if(err) console.log(err);
        console.log('File deleted.');//Dosya silindi
})