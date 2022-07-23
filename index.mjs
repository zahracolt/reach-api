import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib({ REACH_NO_WARN: 'Y' });
const strtBal = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(strtBal);

console.log('Lauching contract');
const ctcAlice = accAlice.contract(backend);

console.log('Starting backends...');

const users = await stdlib.newTestAccounts(10, strtBal);
const ctcWho = (chck) =>
  users[chck].contract(backend, ctcAlice.getInfo());

const userAdd = async (chck) => {
  const who = users[chck];
  const ctc = ctcWho(chck);
  const y = await ctc.apis.User.addUsers();
 
 if (y<5) {
  console.log('Counter: ',parseInt(y));
  console.log('Another Cool Bob', stdlib.formatAddress(who), ' just attached to the contract ');
  users.push(who.getAddress());
}
  
  else{
    console.log('Counter: ',parseInt(y));
    console.log(stdlib.formatAddress(who), ' Sorry, the maximum number of users has been reached! ');
  }
}
await Promise.all([
  backend.Alice(ctcAlice, {
    ready : () => {
        console.log('Congrats! Alice is ready to accept attachers!!!') 
	console.log('Starting the attachment...');
    },

  }),

await userAdd(0),
await userAdd(1),
await userAdd(2),
await userAdd(3),
await userAdd(4),
await userAdd(5),
await userAdd(6),
await userAdd(7),
await userAdd(8),
await userAdd(9),
process.exit()
]);


console.log('Exiting...');

console.log('Goodbye!');


