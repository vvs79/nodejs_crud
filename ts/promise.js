import util from 'util';
import fs from 'fs';

var stat = util.promisify(fs.stat);

// stat('.').then(function (stats) {
//     console.log('stats: ', stats);
// }).catch(function (error) {
//     console.log('error: ', error);
// });

function f1(src, callback) {
  let obj = {};
  obj.name = 'Name';
  obj.f1Load = () => { callback(null, obj) };
  obj.f1Error = () => { callback(new Error('This is an error')) };
}

const newF = new f1;

const newFP = util.promisify(f1);

const q = Symbol.for('nodejs.util.promisify.custom');
console.log('q =', q);





class Foo {
  constructor() {
    this.a = 42;
  }

  bar(callback) {
    callback(null, this.a);
  }
}

const foo = new Foo();

const nBar = util.promisify(foo.bar);
nBar.call(foo).then((a2) => console.log('a2 =', a2));

const bindBar = nBar.bind(foo);
bindBar().then((a3) => console.log('a3 =', a3));










export default stat;
