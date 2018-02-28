const express = require('express');
const checks = require('../controller/check');
const books = require('../controller/books');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/book',books.show);
app.get('/books', books.showBook);
app.get('/book/:id', books.seachBook);
app.post('/book/post',[checks.checkTitle,checks.checkAuthor,books.addBook]);
app.put('/book/:id',[checks.checkTitle,checks.checkAuthor,books.updateBook]);
app.delete('/book/delete/:id',books.hardDel);
app.delete('/book/softDelete/:id', books.softDel);
app.get('/books/trash', books.trash);

app.listen(port, function () {
    console.log(" You access success on port " + port);
});