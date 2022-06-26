export const randomString = (len: number) => {
  const str = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let randomStr = '';
  for (let i = 0; i < len; i++) {
    randomStr = randomStr + str[Math.floor(Math.random() * str.length)];
  }
  return randomStr;
};
