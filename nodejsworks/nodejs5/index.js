const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url==="/") {
        res.write("<h1>INDEX SAYFASI</h1>")
    }
    else if (url==="/iletisim") {
        res.write("<h2>Iletisim sayfasina Hos geldiniz</h2>")
    }
    else if (url==="/hakkimda") {
        res.write("<h2>Hakkimda sayfasina Hos geldiniz</h2>")
    }
    res.end();
});

const port = 5000;

server.listen(port, ()=> {
    console.log(`Sunucu port ${port} de başlatıldı`);
});