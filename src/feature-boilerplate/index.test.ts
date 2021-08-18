import { expect } from 'chai';

import { Feature } from './index';

describe('Feature Boilerplate', () => {
  it('creates single instance', () => {
    const instance = Feature.getInstance();
    expect(instance).equal(Feature.getInstance());
  });

  it('outputs Hello World', () => {
    expect(Feature.getInstance().say('World')).equal('Hello World');
  });
});
