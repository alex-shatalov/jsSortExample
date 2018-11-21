// http://rubaxa.github.io/playground/#futures

const STATE = {
  PENDING: 0,
  RESOLVED: 1,
  REJECTED: 2
};

function Futures(executor) {
  this.queue = [];
  this.state = STATE.PENDING;
  this.resolvedValue = null;
  this.rejectedValue = null;
  this.onResolve = item => {
    this.resolvedValue = item;
    this.state = STATE.RESOLVED;
    this.notify();
  };
  this.onReject = item => {
    this.rejectedValue = item;
    this.state = STATE.REJECTED;
    this.notify();
  };

  executor(this.onResolve, this.onReject);
}

Futures.prototype.then = function(onResolve, onReject) {
  return new Futures((resolve, reject) => {
    this.queue.push([onResolve, onReject, resolve, reject]);
    this.notify();
  });
};

Futures.prototype.notify = function() {
  if (this.state !== STATE.PENDING) {
    while (this.queue.length) {
      const item = this.queue.shift();
      const [onResolve, onReject, resolve, reject] = item;
      if (this.state === STATE.RESOLVED) {
        if (typeof onResolve === 'function') {
          resolve(onResolve(this.resolvedValue));
        } else {
          resolve(this.resolvedValue);
        }
      }
      if (this.state === STATE.REJECTED) {
        if (typeof onReject === 'function') {
          reject(onReject(this.rejectedValue));
        } else {
          reject(this.rejectedValue);
        }
      }
    }
  }
};

// http://rubaxa.github.io/playground/#parallel

function parallel(data, callback) {
  const tasks = data.map(
    task =>
      new Promise(resolve => {
        const result = task(resolve);
        return result ? resolve(result) : result;
      })
  );

  Promise.all(tasks).then(results => callback(results));
}

// http://rubaxa.github.io/playground/#printnumbers

const printNumbers = function(max, cols) {
  let z = 0;
  const rows = Math.ceil(max / cols);
  const result = Array(rows)
    .fill(undefined)
    .map(item => []);

  for (let i = 0; i < max; i++) {
    result[z].push(i);
    z++;
    if (z === rows) {
      z = 0;
    }
  }
  return result.map(item => item.join(' ')).join('\n');
};
