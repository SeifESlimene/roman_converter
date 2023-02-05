function convertToRoman() {
  let number = parseInt(document.getElementById("number").value);
  let romans = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let thousands = Math.floor(number / 1000) * 1000;
  let hundreds = Math.floor((number % 1000) / 100) * 100;
  let tens = Math.floor(((number % 1000) % 100) / 10) * 10;
  let ones = ((number % 1000) % 100) % 10;
  let romanThousands, romanHundreds, romanTens, romanOnes;

  console.log(
    `thousands: ${thousands} and hundreds: ${hundreds} and tens: ${tens} and ones: ${ones}`
  );

  switch (thousands) {
    case 1000:
      romanThousands = "m";
      break;
    case 2000:
      romanThousands = "mm";
      break;
    case 3000:
      romanThousands = "mmm";
      break;
    default:
      romanThousands = "";
  }

  switch (hundreds) {
    case 100:
      romanHundreds = "c";
      break;
    case 200:
      romanHundreds = "cc";
      break;
    case 300:
      romanHundreds = "ccc";
      break;
    case 400:
      romanHundreds = "cd";
      break;
    case 500:
      romanHundreds = "d";
      break;
    case 600:
      romanHundreds = "dc";
      break;
    case 700:
      romanHundreds = "dcc";
      break;
    case 800:
      romanHundreds = "dccc";
      break;
    case 900:
      romanHundreds = "cm";
      break;
    default:
      romanHundreds = "";
  }

  switch (tens) {
    case 10:
      romanTens = "x";
      break;
    case 20:
      romanTens = "xx";
      break;
    case 30:
      romanTens = "xxx";
      break;
    case 40:
      romanTens = "xl";
      break;
    case 50:
      romanTens = "l";
      break;
    case 60:
      romanTens = "lx";
      break;
    case 70:
      romanTens = "lxx";
      break;
    case 80:
      romanTens = "lxxx";
      break;
    case 90:
      romanTens = "xc";
      break;
    default:
      romanTens = "";
  }

  switch (ones) {
    case 1:
      romanOnes = "i";
      break;
    case 2:
      romanOnes = "ii";
      break;
    case 3:
      romanOnes = "iii";
      break;
    case 4:
      romanOnes = "iv";
      break;
    case 5:
      romanOnes = "v";
      break;
    case 6:
      romanOnes = "vi";
      break;
    case 7:
      romanOnes = "vii";
      break;
    case 8:
      romanOnes = "viii";
      break;
    case 9:
      romanOnes = "ix";
      break;
    default:
      romanOnes = "";
  }

  console.log(
    `romanThousands: ${romanThousands} and romanHundreds: ${romanHundreds} and romanTens: ${romanTens} and romanOnes: ${romanOnes}`
  );

  let result = (
    romanThousands +
    romanHundreds +
    romanTens +
    romanOnes
  ).toUpperCase();

  document.getElementById("result-fn").innerHTML = result;
}
