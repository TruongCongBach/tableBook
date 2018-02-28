let mysql = require('mysql');
let con = mysql.createConnection({
    host      : 'localhost',
    user      : 'root',
    password  : '1',
    database  : 'CRUDBook'
});

exports.show = function (req, res) {
    con.query('select id, title, author, publisher, price from book where status = "yes"',
        function (err, result) {
            if(err) res.status(300).send({message : 'False select'});
            res.json(result);
    });
};

exports.showBook = function(req, res) {
    con.query('select id, title, author, publisher, price from book where status = "yes" ',
        function (err, result) {
            if(err) res.status(304).send({ message :'false query select'});
            res.json(result);
    });
};

exports.seachBook = function (req, res) {
    con.query('select id, title, author, publisher, price from book where id =? and status = "yes"  limit 1',
        [req.params.id],
        function (err, result) {
            if(result.length === 0){
                res.status(302).send({ message :'not record'});
            } else {
                res.json(result);
            }
    });
};

exports.addBook = function(req, res) {
    con.query('insert into book set ? , `status`= \'yes\' ', req.body,
        function(err) {
            if(err) res.status(304).send({ message :'false query add book'});
            res.send('Success...!');
    });

};
exports.updateBook = function (req, res) {
    con.query('Update book set ? where id = ' + req.params.id, req.body,
        function (err) {
            if(err) res.status(304).send({ message :'false query update'});
            res.send({message: 'update' + req.params.id +'success'});
    });

};
exports.hardDel = function (req,res) {
    con.query('Delete from book Where id =' + req.params.id , function (err) {
        if(err) res.status(304).send({ message :'false query hard del'});
        res.send("Success....!");
    });
};

exports.softDel = function (req, res) {
    con.query('update book set status = \'no\' where id = '+req.params.id,function (err) {
        if(err) res.status(304).send({ message :'false query soft del'});
        res.send({message: 'softDelete success!'});
    });
};

exports.trash = function (req, res) {
    con.query('select id, title, author, publisher, price from book where status = \'no\' ', function (err, result) {
        if(err) res.status(304).send({ message :'false query show trash'});
        res.json(result);
    });
};