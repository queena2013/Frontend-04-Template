// function match(str, target) {
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === target[0]) {
//       for (var j = i + 1; j < target.length + i; j++) {
//         if (str[j] !== target[j - i]) {
//           break;
//         }
//         return true;
//       }
//     } else {
//       if (i === str.length - 1) {
//         return false;
//       }
//       continue;
//     }
//   }
// }

// console.log(match('bacabcdefghekk', 'abcdef'));

// function match(string) {
//   let foundA = false;
//   for (let c of string) {
//     if (c === 'a') {
//       foundA = true;
//     } else if (foundA && c === 'b') {
//       return true;
//     } else {
//       foundA = false;
//     }
//   }
//   return false;
// }

// console.log(match('bacabc'));

// // 使用状态机
// function match(string) {
//   let state = start;
//   for (let c of string) {
//     state = state(c);
//   }
//   return state === end;
// }

// function start(c) {
//   if (c === 'a') {
//     return foundA;
//   } else {
//     return start;
//   }
// }

// function end(c) {
//   return end;
// }

// function foundA(c) {
//   if (c === 'b') {
//     return foundB;
//   } else {
//     return start(c);
//   }
// }

// function foundB(c) {
//   if (c === 'c') {
//     return foundC;
//   } else {
//     return start(c);
//   }
// }

// function foundC(c) {
//   if (c === 'd') {
//     return foundD;
//   } else {
//     return start(c);
//   }
// }

// function foundD(c) {
//   if (c === 'e') {
//     return foundE;
//   } else {
//     return start(c);
//   }
// }

// function foundE(c) {
//   if (c === 'f') {
//     return end;
//   } else {
//     return start(c);
//   }
// }

// console.log(match("ababcdefg"));


// abcabx
// 使用状态机
function match(string) {
  let state = start;
  for (let c of string) {
    state = state(c);
  }
  return state === end;
}

function start(c) {
  if (c === 'a') {
    return foundA;
  } else {
    return start;
  }
}

function end(c) {
  return end;
}

function foundA(c) {
  if (c === 'b') {
    return foundB;
  } else {
    return start(c);
  }
}

function foundB(c) {
  if (c === 'a') {
    return foundA2;
  } else {
    return start(c);
  }
}

function foundA2(c) {
  if (c === 'b') {
    return foundB2;
  } else {
    return start(c);
  }
}

function foundB2(c) {
  if (c === 'a') {
    return foundA3;
  } else {
    return foundB(c);
  }
}

function foundA3(c) {
  if (c === 'b') {
    return foundB3;
  } else {
    return foundA2(c);
  }
}

function foundB3(c) {
  if (c === 'x') {
    return end;
  } else {
    return foundB2(c);
  }
}

console.log(match("ababababx"));