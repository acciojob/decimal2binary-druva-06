function decimalToBinary(num) {
  //Write you code here
	let ans = '';
  while (num != 0) {
  	ans+=num%2
	  num/=2
  }
	console.log([...ans].reduce((x, y) => y.concat(x)))
}

window.decimalToBinary = decimalToBinary;
