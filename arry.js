let a = [
  { fruit: "오렌지", brix: 14 },
  { fruit: "사과", brix: 10 },
  { fruit: "포도", brix: 12 },
  { fruit: "망고", brix: 15 },
  { fruit: "딸기", brix: 9 },
];

const result = a.reduce((prev, cur) => {
  if (cur.brix >= 12) {
    prev.push(cur.fruit);
  }
  return prev;
}, []);

console.log(result);
