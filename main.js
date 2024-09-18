// bai 1
// document.write("Bai 1");
// document.write("<br>");
// for (let i = 1; i < 100; i++) {
// 	if (i == 99) break;
// 	document.write(i + " ");
// }
// document.write("<br>");
// bai 2
// document.write("Bai 2");
// document.write("<br>");
// let a = +prompt("Nhap nhiet do");
// if (a < 20) {
// 	document.write("Tang nhiet do");
// } else if (a > 100) {
// 	document.write("Giam nhiet do");
// }
// document.write("<br>");
// bai 3
// let n = +prompt("Nhap so");
// function fibo(n) {
// 	let so1 = 0,
// 		so2 = 1,
// 		c;

// 	for (let i = 1; i <= n; i++) {
// 		c = so1 + so2;
// 		so1 = so2;
// 		so2 = c;
// 		// document.write(c + "<br>");
// 		document.write(c + "<br>");
// 	}
// }
// fibo(n);

// bai 4
// let n = +prompt("Nhap so");
// function fibo(n) {
// 	let so1 = 0,
// 		so2 = 1,
// 		c;

// 	for (let i = 1; i <= n; i++) {
// 		c = so1 + so2;
// 		so1 = so2;
// 		so2 = c;
// 		// document.write(c + "<br>");
// 		if (c % 5 == 0) document.write(c + "<br>");
// 	}
// }
// fibo(n);

// bai 5
// function fibo() {
// 	let so1 = 0,
// 		so2 = 1,
// 		c,
// 		total = 0;
// 	let n = 20;
// 	for (let i = 1; i <= n; i++) {
// 		c = so1 + so2;
// 		so1 = so2;
// 		so2 = c;
// 		total += c;
// 		document.write(c + "<br>");
// 	}
// 	document.write("Total = " + total);
// }
// fibo();

// bai 6

// let a = 7,
// 	b,
// 	c = 0;
// for (let i = 1; i <= 30; i++) {
// 	b = a * i;
// 	c += b;
// }
// document.write(c);

// bai 7
// for (let i = 0; i <= 100; i++) {
// 	if (i % 3 == 0 && i % 5 == 0) {
// 		document.write(i + " FizzBuzz" + "<br>");
// 	} else if (i % 3 == 0) {
// 		document.write(i + " Fizz" + "<br>");
// 	} else if (i % 5 == 0) {
// 		document.write(i + " Buzz" + "<br>");
// 	} else {
// 		document.write(i + "<br>");
// 	}
// }
// bai 8
function play() {
	let number = +prompt("Nhap so");

	let randomNumber = Math.round(Math.random() * number);

	console.log(randomNumber);
	let guessNumber = +prompt("Doan so");
	let count = 1;
	while (count < 3) {
		if (guessNumber < randomNumber) {
			alert("Nhỏ quá!");
			guessNumber = +prompt("Nhap so khac");
		} else if (guessNumber > randomNumber) {
			alert("Cao quá!");
			guessNumber = +prompt("Nhap so khac");
		} else {
			alert("Chuc mung ban da doan dung");
			break;
		}
		count++;
	}
	document.write("Trò chơi kết thúc!");
}
