import { expect } from 'chai';

import { say, getAverage } from './index';

describe('Feature1', () => {
  it('say - outputs Hello World', () => {
    expect(say('World')).equal('Hello World');
  });
  it('getAverage - returns average', () => {
    expect(getAverage(5, 10)).equal(7.5);
  });
});
