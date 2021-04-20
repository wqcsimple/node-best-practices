const Util = require('../lib/util')

let a = {
  b: {
    c: {
      d: "1"
    }
  }
}

console.log(a['e']['d'])

console.log(Util.get(a, 'b.e.d'))
