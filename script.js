function decimalToBinary(num) {
  //Write you code here
	let ans = '';
  while (num != 0) {
  	ans+=num%2
	  num/=2
  }
	console.log(ans.reverse())
}

window.decimalToBinary = decimalToBinary;
