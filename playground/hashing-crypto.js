const {SHA256} = require ('crypto-js');

let message = 'i am user 1';
console.log('MESSAGE', message);
let hash = SHA256(message).toString();
console.log('HASH', hash);

let data = {
  id: 4
}

let token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'salting the hash').toString()
}

let resultHash = SHA256(JSON.stringify(token.data) + 'salting the hash').toString();

if (resultHash === token.hash) {
  console.log('token was not changed');
} else {
  console.log('token changed, do not trust!');
}
