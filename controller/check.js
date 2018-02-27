exports.checkTitle = function (req, res, next) {
    if((req.body.title.length === 0) || (req.body.title.length > 40 )){
       return res.send({message: 'update  error title < 40 and title not null'});
    }
    next();
};
exports.checkAuthor = function (req, res, next) {
    if((req.body.author.length === 0) || (req.body.author.length > 100 )){
        return res.send({message: 'update  error title < 100 and title not null'});
    }
    next();
};
module.exports.checkLength = function (req, res, err, result) {
    if(err || result.length === 0){
        res.status(302).send({ message :'not record'});
    } else {
        res.json(result);
    }
};