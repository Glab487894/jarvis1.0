//-----------------------------Satings-----------------------------
const name = ['jarvis', 'джарвис', 'Jarvis', 'Джарвис'];


const startTriggers = ['привет', 'Привет', 'Джарвис', 'джарвис', 'Jarvis', 'jarvis'];


//=================================================================

//----------------------------require------------------------------
const express = require('express');
const bodyParser = require("body-parser");

//--------------------------functions------------------------------
//authorization
const giveRoot = require('./users/user');


const howAreYou = require('./functions/howAreYou');
const dataTime = require('./functions/dataTime');

//=================================================================

//---------------------------server build--------------------------
const PORT = process.env.PORT || 7201;
const app = express();
//=================================================================
const urlencodedParser = bodyParser.urlencoded({extended: false});

let dialogueStatus = 0;

const sistemName = name[0];


 function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
//=================================================================



app.get('/', function(req, res){
	res.sendFile('html/authorization/authorization.html', {root: __dirname });
});

app.post('/authorization', urlencodedParser, function(req, res){
	var username = req.body.username;
	let password = req.body.password;

	console.log(username);
	console.log(password);
	let status = giveRoot(username, password);


	if(status == 1){
		res.sendFile('./html/main.html', {root: __dirname });
	}else if(status == 0){
		res.sendFile('html/authorization/authorizationFalse.html', {root: __dirname });
	}


    app.get('/chat', function(req, res){
    	res.sendFile('./html/chat.html', {root: __dirname });
    });


    //---------------------correspondence-----------------------------

    app.post('/inputText', urlencodedParser, function(req, res){

    let text;
            // sending a response to the user

        function answear(text, res){
            console.log(sistemName, ': ', text);
            res.send(text + `<br /><br /><form method="post" action="http://localhost:7201/inputText"><input type="text" name="mainUserInput"><input type="submit" name="submit"></form>`);
        }


    	var inputText = req.body.mainUserInput;
        	console.log(username, ': ', inputText);
        	
        	let inputErray = inputText.split(' ');


        		if(dialogueStatus == 1){

//!!?


//!!?/
                    
        			if (inputErray[0] == 'как') {
        				if (inputErray[1] == 'дела') {
        					 text = howAreYou();
        					console.log(text);
        					answear(text, res);
        				}
        				if (inputErray[1] == 'ты') {
        					 text = howAreYou();
        					answear(text, res);
        				}
        			}

        			if(inputErray[0] == 'каторый'){
        				if (inputErray[1] == 'час') {
        					 text = dataTime('time');
                            console.log('inside...............dataTime : ', text);
        					answear(text, res);

        				}
        			}

        			if (inputErray[0] == 'какой') {
        				if (inputErray[2] == 'день') {
        					if (inputErray[1] == 'сегодня') {
        						 text = dataTime('day', 0);
                                answear(text, res);
        					}
        					if (inputErray[1] == 'завтра') {
        						text = dataTime('day', 1);
                                answear(text, res);
        					}
        					if (inputErray[1] == 'послезавтра') {
        						text = dataTime('day', 2);
                                answear(text, res);
        					}
        				}
        			}

        		}else{
    				if (startTriggers.includes(inputText) == true) {
    					var randomNumber = getRandomInt(0, 100);
    					dialogueStatus = 1;
                        if(name.includes(inputText) == true){
                             text = 'да';
                            answear(text, res);
                        }else{
        					 text = (randomNumber < 50)? 'привет' : 'сдарова';
        					answear(text, res);
                        }
    			    }
    		  }


    })

});

//-------------------------------------sever listen-------------------------------------

app.listen(PORT, () => {
	console.log('MAIN BLOCK OF SISTEM STARTED ON PORT 7201');
});
