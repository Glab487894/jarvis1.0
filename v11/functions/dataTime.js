 
 function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

const randomNumber = getRandomInt(0, 100);

let text;




//timePoint
						function paymentDayIndicator(today, timePlus){
							let dayIndicator = today + timePlus;
							return(callDay(dayIndicator));
						}

//dayIndicator
						
						function callDay(dayIndicator){
							if(dayIndicator == 1){
								return(mon());
							}
							if(dayIndicator == 2){
								return(tue());
							}
							if(dayIndicator == 3){
								return(wed());
							}
							if(dayIndicator == 4){
								return(thu());
							}
							if(dayIndicator == 5){
								return(fri());
							}
							if(dayIndicator == 6){
								return(sat());
							}
							if(dayIndicator == 7){
								return(sun());
							}
						}


							function mon(){
									text = (randomNumber < 50)? 'сегодня понедельнник':'понедельнник';
									return(text);
								}
							function tue(){
									text = (randomNumber < 50)? 'сегодня вторник':'вторник';
									return(text);
							}
							function wed(){
									text = (randomNumber < 50)? 'сегодня среда':'среда';
									return(text);
							}
							function thu(){
									text = (randomNumber < 50)? 'сегодня четверг':'четверг';	
									return(text);							
							}
							function fri(){							
									text = (randomNumber < 50)? 'сегодня пятница':'пятница';			
									return(text);				
							}
							function sat(){							
									text = (randomNumber < 50)? 'сегодня субота':'субота';		
									return(text);					
							}
							function sun(){
									text = (randomNumber < 50)? 'сегодня васкресенье':'васкресенье';
									return(text);
							}




 const dataTime = function (mode, timePlus){
					let now = new Date();
					let nowStr = now.toString();

					let [dateA, timeA] =  nowStr.split('T');

					let [day, month, date, year, time, other] = dateA.split(' ');

					if (mode == 'time') {
						text = time;
						return(text);
					}

					if (mode = 'day') {
						console.log(111, 'day');
//todayIndicator
						if (day == 'Mon') {
							let todayIndicator = 1;
							text = paymentDayIndicator(todayIndicator, timePlus);
						}
						if (day == 'Tue') {
							let todayIndicator = 2;
							text = paymentDayIndicator(todayIndicator, timePlus);
						}
						if (day == 'Wed') {
							let todayIndicator = 3;
							text = paymentDayIndicator(todayIndicator, timePlus);
						}
						if (day == 'Thu') {
							let todayIndicator = 4;
							text = paymentDayIndicator(todayIndicator, timePlus);

						}
						if (day == 'Fri') {
							let todayIndicator = 5;
							text = paymentDayIndicator(todayIndicator, timePlus);
						}
						if (day == 'Sat') {
							let todayIndicator = 6;
							text = paymentDayIndicator(todayIndicator, timePlus);
							return(text);
						}
						if (day == 'Sun') {
							let todayIndicator = 7;
							text = paymentDayIndicator(todayIndicator, timePlus);
						}
						return(text);

						console.log('dataTime : ', text);
					}
					console.log(text);
    			}

console.log('dataTime hes been connected');

module.exports = dataTime;