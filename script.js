function daysOfAYear(num){
   let year = parseInt(num)
	let leap = false
	if(year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
		leap = true
	}
   else if(year % 4 === 0 && year % 100 !== 0){
	    leap = true
   }	
   return  leap? 366 : 355
}

