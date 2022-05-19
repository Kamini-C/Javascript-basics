/* 
if
else if
else if
else if
else 
*/

/* 
<0: too cold
0-10: okayish cold
10-20: okay temperature
20-30: warm outside
30-40: swim time
30-40: too hot
 */
let temperature =  43;

console.group("First Method:"); // handles by less than sign, start from lower value
let message1 = ", Its too cold";
let message2 = ", Its okayish cold";
let message3 = ", Its okay temperature";
let message4 = ", Its warm outside";
let message5 = ", Its swim time";
let message6 = ", Its too hot";

if(temperature < 0)      {console.log(temperature, message1);}
else if(temperature < 10){console.log(temperature, message2);}
else if(temperature < 20){console.log(temperature, message3);}
else if(temperature < 30){console.log(temperature, message4);}
else if(temperature < 40){console.log(temperature, message5);}
else                     {console.log(temperature, message6);}

console.groupEnd();

console.group("Second Method:"); // handles by greater than sign, start from higher value

if(temperature > 40)     {console.log(temperature, message6);}
else if(temperature > 30){console.log(temperature, message5);}
else if(temperature > 20){console.log(temperature, message4);}
else if(temperature > 10){console.log(temperature, message3);}
else if(temperature > 0) {console.log(temperature, message2);}
else                     {console.log(temperature, message1);}

console.groupEnd();

