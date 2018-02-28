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
