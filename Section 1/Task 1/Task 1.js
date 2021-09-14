//Task 1
const checkPassword = (str) => {
  if (str.length < 7) {
    return "The Password is less than 7 char";
  } else if (!str.charAt(0).match(/[A-Z]/)) {
    return "The First Char is not Capital";
  } else if (!str.match(/[0-9]/)) {
    return "The Password does not contain a number";
  } else if (str.match(/#/)) {
    return "The Password conatin #";
  } else {
    let password = str.match(/[a-zA-Z0-9]*/);
    return password[0];
  }
};
console.log(checkPassword("TestJudge1"));
