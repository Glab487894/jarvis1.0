let username = 'glab_16';
let password = 'qweasdzxc123456789';


console.log('user has been connected');

let giveRoot = function(inputUsername, inputPassword){
	if (inputUsername == username && inputPassword == password){
		return(1);
		
	}else{
		return(0);
	}
}

module.exports = giveRoot;
