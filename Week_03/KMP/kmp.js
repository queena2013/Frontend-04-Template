// 思路
// 1，根据模式串酸楚跳转表格
// 2，匹配跳转表格，拿原串跟模式串对比

function kmp(source, pattern) {
  // 计算table
  let table = new Array(pattern.length).fill(0);

  {
    // i: 自重复开始位置  j: 已重复的字数
    let i = 1, j = 0;
    while (i < pattern.length) {
      if (pattern[i] === pattern[j]) {
        ++i;
        ++j;
        // table[i]位置的重复数是j
        table[i] = j;
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          ++i;
        }
      }
    }
  }
  console.log(table);

  {
    // i: source串的位置  j: pattern串的位置
    let i = 0, j = 0;
    while (i < source.length) {
      if (source[i] === pattern[j]) {
        ++i;
        ++j;
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          ++i;
        }
      }
      if (j === pattern.length) {
        return true;
      }
    }
    return false;
  }
}

kmp("", "abcdabce");
kmp("", "abababc");
kmp("", "aabaaac");

console.log(kmp("Hello", "ll"));
