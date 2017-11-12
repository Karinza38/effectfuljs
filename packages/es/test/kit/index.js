const assert = require("assert")

/** 
 * returns `Generator` like object running both Generators in `a` and `b` and
 * ensuring their results are deep equal 
 * it does nothing if generator throws
 */
exports.eqlGens = function eqlGens(a, b) {
  a = a[Symbol.iterator]()
  b = b[Symbol.iterator]()
  return {
    [Symbol.iterator]() { return this; },
    next(v) {
      const res = a.next(v)
      assert.deepEqual(res,b.next(v))
      return res
    },
    throw(v) {
      const res = a.throw(v)
      assert.deepEqual(res,b.throw(v))
      return res
    },
    return(v) {
      const res = a.return(v)
      assert.deepEqual(res,b.return(v))
      return res
    }
  }
}

/** 
 * runs `next` for generator `a` until it is done, 
 * passing step number as `next` argument 
 */
exports.runAll = function runAll(g) {
  let i = 0
  for(const a = g[Symbol.iterator](); !a.next(i).done;i++) {}
  return i
}

/** adds console output to each iterator's method */
exports.trace = function trace(name, g) {
  const a = g[Symbol.iterator]()
  let num = 0
  function method(m) {
    return function(v) {
      console.log(`${name}[${m}:${num++}]<-`,v)
      try {
        const r = a[m](v)
        console.log(`${name}[${m}:${num}]${r.done?"=":"-"}>`,r.value)
        return r
      } catch(e) {
        console.log(`${name}[${m}:${num}]~>`,e)
        throw e
      }
    }
  }
  return {
    [Symbol.iterator]() { return this; },
    next: method("next"),
    throw: method("throw"),
    return: method("return")
  }  
}

/** returns `v` after small random delay */
exports.delay = global.delay = delay
function delay(v) {
  return new Promise(resolve => {
    setTimeout(() => resolve(v),100*Math.random())
  })
}

/**
 * compares both promises are either fulfiled with deepEqaul values or 
 * both are rejected with same `message` field
 */
exports.eqlPromises = eqlPromises
function eqlPromises(a, b, rethrow) {
  return a.then(
    (av) => b.then(bv => (assert.deepEqual(av,bv),av),
                   be => assert.fail(av)),
    (ae) => b.then(bv => assert.fail(ae),
                   be => {
                     assert.equal(ae.message, be.message)
                     if (rethrow) throw ae
                   }))
}

/** 
 * turns iterator into async iterator by adding small random delay 
 * to each method result 
 */
exports.delayIterator = function(iter) {
  iter = iter[Symbol.iterator]()
  return {
    [Symbol.asyncIterator]() { return this },
    next(v) { return delay(iter.next(v)) },
    throw(v) { return delay(iter.throw(v)) },
    return(v) { return delay(iter.return(v)) }
  }
}

/** like eqlGens bug for async iterators */
exports.eqlAsyncGens = function eqlAsyncGen(a, b) {
  a = a[Symbol.asyncIterator]()
  b = b[Symbol.asyncIterator]()
  function method(name) {
    return function(v) {
      return eqlPromises(a[name](v),b[name](v),true)
    }
  }
  return {
    [Symbol.asyncIterator]() { return this; },
    next: method("next"),
    throw: method("throw"),
    return: method("return")
  }
}

/** like `trace` but for async iterators */
exports.traceAsync = function traceAsync(name, g) {
  const a = g[Symbol.asyncIterator]()
  let num = 0
  function method(m) {
    return function(v) {
      console.log(`${name}[${m}:${num++}]<-`,v)
      try {
        return a[m](v).then(
          r => {
            console.log(`${name}[${m}:${num}]${r.done?"=":"-"}>`,r.value)
            return r
          },
          e => {
            console.log(`${name}[${m}:${num}]~>`,e)
            throw e
          }
        )
      } catch(e) {
        console.log(`${name}[${m}:${num}]~>>`,e)
        throw e
      }
    }
  }
  return {
    [Symbol.asyncIterator]() { return this; },
    next: method("next"),
    throw: method("throw"),
    return: method("return")
  }  
}

/** 
 * like runAll but for async iterators, returns a promise with result value
 * if `buf` is specified also pushes iterated values there
 */
exports.asyncRunAll = function asyncRunAll(g, buf) {
  const a = g[Symbol.asyncIterator]()
  return iter()
  function iter() {
    return a.next().then(function(i) {
      if (i.done)
        return i.value
      if (buf)
        buf.push(i.value)
      return iter()
    })
  }
}
