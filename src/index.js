module.exports = function toReadable (number) {
  var result = '';
  var temp = number;
  if(temp == 0) return 'zero';
  if(temp >= 100 && temp < 1000){
    result = translate(Math.trunc(temp/100)) + ' hundred';
    temp = temp % 100;
  }

  if(temp > 20){
      t = translate(Math.trunc(temp/10)*10);
      result != '' ? result = result + ' ' + t : result = t;
    if(temp % 10)
        result = result + ' ' + translate(temp % 10);
  }
  else
    if(temp > 0)
      result != '' ? result = result + ' ' + translate(temp) : result = translate(temp);
  
  return result;
}

function translate(n) {
    if(n == 1) return 'one';
    if(n == 2) return 'two';
    if(n == 3) return 'three';
    if(n == 4) return 'four';
    if(n == 5) return 'five';
    if(n == 6) return 'six';
    if(n == 7) return 'seven';
    if(n == 8) return 'eight';
    if(n == 9) return 'nine';
    if(n == 10) return 'ten';
    if(n == 11) return 'eleven';
    if(n == 12) return 'twelve';
    if(n == 13) return 'thirteen';
    if(n == 14) return 'fourteen';
    if(n == 15) return 'fifteen';
    if(n == 16) return 'sixteen';
    if(n == 17) return 'seventeen';
    if(n == 18) return 'eighteen';
    if(n == 19) return 'nineteen';
    if(n == 20) return 'twenty';  
    if(n == 30) return 'thirty'; 
    if(n == 40) return 'forty'; 
    if(n == 50) return 'fifty'; 
    if(n == 60) return 'sixty'; 
    if(n == 70) return 'seventy'; 
    if(n == 80) return 'eighty'; 
    if(n == 90) return 'ninety'; 
}