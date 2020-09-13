// wildCard 字符串分析算法
// wildcard例子: ab*cd*abc*a?d
// 思路：最后一个*尽量多匹配,前面的*尽量少匹配
// 1.匹配ab
// 2.匹配*cd*abc
// 3.匹配a?d

function find(source, pattern) {
  // 找出有多少个*号
  let startCount = 0;
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === '*') {
      startCount++
    }
  }

  // 没有*号的情况, 要完全匹配
  if (startCount === 0) {
    for (let i = 0; i < pattern.length; i++) {
      // “?”号是可以匹配任何字符的
      if (pattern[i] !== source[i] && pattern[i] !== '?') {
        return false;
      }
    }
    return;
  }

  // i表示pattern的位置 lastIndex表示原串source的位置
  let i = 0;
  let lastIndex = 0;

  // step1. 匹配第一个*号的前段
  for (i = 0; pattern[i] !== '*'; i++) {
    if (pattern[i] !== source[i] && pattern[i] !== '?') {
      return false;
    }
  }

  lastIndex = i;

  // debugger;

  // step2. 匹配 *模式串 的部分
  for (let p = 0; p < startCount - 1; p++) {
    i++;
    let subPattern = '';
    while (pattern[i] !== '*') {
      subPattern += pattern[i];
      i++;
    }

    // subPattern里的?号替换成任意字符
    let reg = new RegExp(subPattern.replace(/\?/g, "[\\s\\S]"), "g");
    reg.lastIndex = lastIndex;

    console.log(reg.exec(source));
    lastIndex = reg.lastIndex;
  }

  // step3. 尾部的匹配, 最后一个*号后面的部分, 从后往前去匹配
  for (let j = 0; j <= source.length - lastIndex && pattern[pattern.length - j] !== '*'; j++) {
    if (pattern[pattern.length - j] !== source[source.length - j] && pattern[pattern.length - j] !== '?') {
      return false;
    }
  }
  return true;
}

console.log(find("abcabcabxaac", "a*b*bx*c"));
// console.log(find("abcabcabxaac", "a*b*b?x*c"));
