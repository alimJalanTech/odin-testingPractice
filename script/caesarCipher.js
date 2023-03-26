const caesarCipher = (str) => {
  const lookMap = storeInMap(str);
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    result += lookMap[char] || char;
  }
  return result;
};

const storeInMap = (str) => {
  const lookMap = {};
  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(65 + i);
    const rot13Char = String.fromCharCode(((i + 13) % 26) + 65);
    lookMap[char] = rot13Char;
    lookMap[char.toLowerCase()] = rot13Char.toLowerCase();
  }
  return lookMap;
};

export default caesarCipher;
