var fn = {
    list : function(req,res,next){
        var no = req.query.pageNo;
        res.end('list Page : ' + no);
    },
    view : function(){

    },
    delete : function(){

    }
};

module.exports = fn;