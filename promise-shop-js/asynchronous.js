let promise = new Promise((reslove, reject) => {
  reslove('PROMISE VALUE');
});

promise.then(console.log);
console.log('MAIN PROGRAM');