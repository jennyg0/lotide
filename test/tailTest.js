const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe("#tail", () => {

  it('returns 2 for tail(["Hello", "Lighthouse", "Labs"]).length', () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });

  it('returns "Lighthouse" for tail(["Hello", "Lighthouse", "Labs"])[0]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], 'Lighthouse');
  });

  it('returns "Labs" for tail(["Hello", "Lighthouse", "Labs"])[1]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], 'Labs');
  });
 
});

