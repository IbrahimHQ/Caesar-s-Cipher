function rot13(str) {
  let newString = ''
  for (var x in str) {
    if (str.charCodeAt(x) >= 65 && str.charCodeAt(x) <= 91) { //checks chars A-Z
      if (str.charCodeAt(x) < 78) { //checks chars A-M
        newString += String.fromCharCode(str.charCodeAt(x) + 13) //concatenates by moving forward 26 (letters of the alphabet to loop from Z), and back 13)
      }
      else { //checks chars N-Z
        newString += String.fromCharCode(str.charCodeAt(x) - 13) //concatenates by moving back 13
      }
    } else {
      newString += str[x] //concatenates non A-Z char as is
    }
  }
  return newString;
}

rot13("SERR PBQR PNZC");

//tests
//1. rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
//2. rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
//3. rot13("SERR YBIR?") should decode to the string FREE LOVE?
//4. rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
