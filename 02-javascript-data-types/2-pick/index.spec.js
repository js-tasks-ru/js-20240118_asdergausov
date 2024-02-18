import { pick } from './index.js';

describe('javascript-data-types/pick', () => {
  it('should return new object with one passed field', () => {
    const obj = {foo: 'foo', bar: 'bar'};

    expect(pick(obj, 'foo')).toEqual({foo: 'foo'});
    expect(pick(obj, 'foo')).toEqual({foo: 'foo'});
  });

  it('should return new object with a few passed field', () => {
    const obj = {foo: 'foo', bar: 'bar', baz: 'baz'};

    expect(pick(obj, 'foo', 'bar')).toEqual({foo: 'foo', bar: 'bar'});
    expect(pick(obj, 'foo', 'bar')).toEqual({foo: 'foo', bar: 'bar'});
  });

  it('should return an empty object if passed fields does not found', () => {
    const obj = {foo: 'foo', bar: 'bar'};

    expect(pick(obj, 'riba')).toEqual({});
    expect(pick(obj, 'riba')).toEqual({});
  });
  
  it('should deep copy array entrances containig simple objects', () => {
    const obj = {foo: 'foo', bar: [1,2,3]};
    const expected = {'bar': [1, 2, 3]}
    expect(pick(obj, 'bar')).toEqual(expected);
    obj['bar'][0] = 'he-he-he'
    expect(expected.bar).toEqual([1, 2, 3]);
  });

  it('should deep copy roperty that is object itself', () => {
    const obj = {foo: {'bar': 'bar'}};
    const expected = {foo: {'bar': 'bar'}}
    expect(pick(obj, 'foo')).toEqual(expected);

    obj['foo']['bar'] = 'baz'
    expect(expected.foo['bar']).toEqual('bar');
  });
});
