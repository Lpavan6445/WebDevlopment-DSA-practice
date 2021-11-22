/*below function converts string to lowercase */
function convert(strg) {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var con = "";
  for (var i = 0; i < strg.length; i++) {
    if (strg[i] == " ") {
      con += " ";
      continue
    }
    for (var j = 0; j < lower.length; j++) {
      if (strg[i] === lower[j] || strg[i] === upper[j]) {
        con += lower[j];
      }
    }
  }
  return con;
}
/*below function checks search string exists in the original string or not */
function check(str, sear) {
  var string = convert(str);
  var search = convert(sear);
  console.log(string);
  console.log(search);
  var count = 0;
  for (var j = 0; j < string.length; j++) {
    
    if (search[0] === string[j]) {
      count++;
      for (var k = 1; k < search.length; k++) {
        if (search[k] === string[j + k]) {
          count++;
          console.log(count);
        }else{
          console.log(count);
          k=search.length;
          break;
        }
      }
      if (count === search.length) {
        return true;
      } else if (count === 0 || count < search.length) {
        break;
      }
    }
  }

    return false
}
/*------------Inputs------- */
// console.log(check("MASAI SCHOOL", "hoo"));
console.log(check("MASAI SCHOOL", "hool"));

console.log(check("MASAI SCHOOL", "ol"));