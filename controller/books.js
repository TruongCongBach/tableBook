let mysql = require('mysql');
let con = mysql.createConnection({
    host      : 'localhost',
    user      : 'root',
    password  : '1',
    database  : 'CRUDBook'
});

module.exports.show = function (req, res) {
    con.query('select id, title, author, publisher, price from book where statusDel = "no"',function (err, result) {
        res.json(result);
    });
};

module.exports.showBook = function(req, res) {
    con.query('select id, title, author, publisher, price from book where statusDel = "no" ', function (err, result) {
        if (err) throw err;
        res.json(result);
    });
};

module.exports.seachBook = function (req, res) {
    con.query('select id, title, author, publisher, price from book where id =? and statusDel = "no"  limit 1',
        [req.params.id],
        function (err, result) {
            if(err || result.length === 0){
                res.status(302).send({ message :'not record'});
            } else {
                res.json(result);
            }
    });
};

module.exports.addBook = function(req, res) {
    con.query('insert into book set ? , `statusDel`= \'no\' ', req.body, function() {

        res.send('Success...!');
    });
};

module.exports.updateBook = function (req, res) {
    con.query('Update book set ? where id = '+ req.params.id, req.body, function () {
        res.send({message: 'update' + req.params.id +'success'});
    });
};

module.exports.hardDel = function (req,res) {
    con.query('Delete from book Where id ='+req.params.id , function (err) {
        if(err) throw message('Delete HardDel');
        res.send("Success....!");
    });
};

module.exports.softDel = function (req, res) {
    con.query('update book set statusDel = "yes" where id = '+req.params.id,function (err) {
        if(err) throw err('softDelete false');
        res.send({message: 'softDelete success!'});
    });
};

module.exports.trash = function (req, res) {
    con.query('select id, title, author, publisher, price from book where statusDel = "yes" ', function (err, result) {
        if (err) throw err;
        res.json(result);
    });
};