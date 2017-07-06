var Restify = require('restify');
var utility = require('./utility');
var validationSchema = require('./validation_schema');
//Create server with restify
var server = Restify.createServer({
    name: 'testServer',
    versions: ['1.0.0']
});

//Restify middleware
server.use(Restify.plugins.acceptParser(server.acceptable));
server.use(Restify.plugins.queryParser());
server.use(Restify.plugins.bodyParser());

server.post('/', utility.validateRequest(validationSchema.user_list), function(req, res, next){
    return res.send(req.body);
})

//Start the server
server.listen(4000,function(err){
    console.log("Server Url : " + server.url);
});
