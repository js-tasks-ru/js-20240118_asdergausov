import { omit } from './index';

describe('javascript-data-types/omit', () => {
  it('should return a new object without passed field', () => {
    const obj = {foo: 'foo'};

    expect(omit(obj, 'foo')).toEqual({});
  });

  it('should return a new object without few passed fields', () => {
    const obj = {foo: 'foo', bar: 'bar', baz: 'baz'};

    expect(omit(obj, 'foo', 'bar')).toEqual({baz: 'baz'});
  });

  it('should return initial object if passed fields doesn\'t found', () => {
    const obj = {foo: 'foo'};

    expect(omit(obj, 'riba')).toEqual({foo: 'foo'});
  });

  it('should deep copy array entrances containig simple objects', () => {
    const obj = {foo: 'foo', bar: [1, 2, 3]};
    const expected = {'bar': [1, 2, 3]};
    expect(pick(obj, 'bar')).toEqual(expected);
    obj['bar'][0] = 'he-he-he';
    expect(expected.bar).toEqual([1, 2, 3]);
  });

  it('should deep copy roperty that is object itself', () => {
    const obj = {foo: {'bar': 'bar'}};
    const expected = {foo: {'bar': 'bar'}};
    expect(pick(obj, 'foo')).toEqual(expected);

    obj['foo']['bar'] = 'baz';
    expect(expected.foo['bar']).toEqual('bar');
  });
});
