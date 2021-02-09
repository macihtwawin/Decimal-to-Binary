let num1 = prompt("Binary of: ");
let bin1 = "";

function getBinary(a) {
	while (a > 0) {
		if (a % 2 === 1) {
			bin1 += "1";
			a = Math.floor(a/2);
		}
		else {
			bin1 += "0";
			a = Math.floor(a/2);
		}
	}

	let binary1 = bin1.split("");
	binary1.reverse();
	let finalBinary = binary1.join("");
	
	document.getElementById("display").innerHTML = finalBinary;

}

getBinary(num1);