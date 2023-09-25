//print odd num
(function(array){
    for(let num of array){
        if(num%2!==0){
            console.log(num);
            
        
        }
    }
})([1,2,4,3]);

//Convert all the strings to title caps in a string array

(function (arr) {
    let Caps = arr.map((madhu) => madhu.charAt(0).toUpperCase() + madhu.slice(1));
    console.log(Caps);
  })(["hello", "world", "javascript"]);

  
  //Sum of all numbers in an array
(function (arr) {
    let sum = arr.reduce((total, num) => total + num, 0);
    console.log(sum);
  })([1, 2, 3, 4, 5]);
  
  
  //Return all the prime numbers in an array
  (function (arr) {
    function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    let primeNums = arr.filter((num) => isPrime(num));
    console.log(primeNums);
  })([1, 2, 3, 4, 5, 9, 10]);

//palidrome
  ( function () {
    var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  })()

  //Remove duplicates from an array
(function (arr) {
  let uniqueArr = arr.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  console.log(uniqueArr);
})([1, 2, 3, 3, 4, 5, 5]);

  
  
  //K TIME
  (function (madhu,su) {
  
    const copymadhu = [...madhu];
  
    if (copymadhu.length === su || su === 0) {
      console.log(copymadhu);
      return copymadhu;
    }
  
    su = su % copymadhu.length;
    for (let i = 0; i < su; i++) {
      copymadhu.unshift(copymadhu.pop());
    }
  
    console.log(copymadhu);
  })([1, 2, 3, 4, 5], 4);
  