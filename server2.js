//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORTONE=7000;
var PORTTWO=7500;

//We need a function which handles requests and send response
function handleRequestONE(request, response){
    response.end('Thanks for stopping by. I will give you a 30 second head start before releasing a hound. ' + request.url);
}
function handleRequestTWO(request, response){
    response.end('I told you to get off my property! Release the hounds!!!' + request.url);
}

//Create a server
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

//Lets start our server
serverOne.listen(PORTONE, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORTTWO);
});
