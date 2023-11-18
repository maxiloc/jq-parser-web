import { expect, it } from '@jest/globals';
import parser from '../src/index';

describe('Single quote String literal', () => {
  it('per se', () => {
        expect(parser("'Hello \"World\"!'")(null)).toEqual('Hello "World"!');
  })

  it('as key', () => {
      expect(parser("{'a': false}")(null)).toEqual({'a': false});
  })
})

describe('Other tests', () => {
  it('handle example code correctly', () => {
    const query = '{"names": .[] | .name}'
    const input = [
      {"name": "Mary", "age": 22},
      {"name": "Rupert", "age": 29},
      {"name": "Jane", "age": 11},
      {"name": "John", "age": 42}
    ]
    const output = [
      {
        "names": "Mary"
      },
      {
        "names": "Rupert"
      },
      {
        "names": "Jane"
      },
      {
        "names": "John"
      },
    ]
    expect(parser(query)(input)).toEqual(output);
  })

  it('handle example code correctly 2', () => {
    const query = '{"names": [.[] | .name]}'
    const input = [
      {"name": "Mary", "age": 22},
      {"name": "Rupert", "age": 29},
      {"name": "Jane", "age": 11},
      {"name": "John", "age": 42}
    ]
    const output = {
      "names": [
        "Mary",
        "Rupert",
        "Jane",
        "John"
      ]
    }

    expect(parser(query)(input)).toEqual(output);
  })

  it('handle double digits array', () => {
    const query = '.panels[12].name'
    const input = {panels:
        [
          null, null, null, null, null, null, null, null, null, null,
          {"name": "Mary", "age": 22},
          {"name": "Rupert", "age": 29},
          {"name": "Jane", "age": 11},
          {"name": "John", "age": 42}
      ]
    }
    const output = "Jane";

    expect(parser(query)(input)).toEqual(output);
  })
})


describe('Error messages', () => {
  const tests = [
    ['. | foo', 'function foo/0 is not defined'],
    ['. | bar', 'function bar/0 is not defined'],
    ['. | bar(4)', 'function bar/1 is not defined'],
    ['. | baz(4)', 'function baz/1 is not defined']
  ]

  tests.forEach(([query, error]) =>
    it(`Error '${error}' for '${query}'`, () => {
      expect(() => parser(query)(input)).toThrow(error);
    })
  )

  const q = ".data | select(.type == \"expresss\")";
  const e = 'Cannot index array with';
  const p = {
    "data": [
      {"type":"express","b":"b"}, {"a":"a","b":"b"}
    ]
  };
  it(`Error '${e}' for '${q}'`, () => {
    expect(() => parser(q)(p)).toThrow(e);
  })
})

describe('nested structure', () => {
  const input = {
    "items": [
      {
        "nested_items": [
          {
            "name": "test",
            "name2": "test"
          }
        ]
      },
      {
        "nested_items": [
          {
            "name": "test2",
            "name2": "test2"
          },
          {
            "name": "test3",
            "name2": "test3"
          }
        ]
      }
    ]
  };

  it('extract correctly', () => {
    expect(parser('.items[].nested_items[]')(input)).toHaveLength(3);
    expect(parser('.items[].nested_items[].name')(input)).toEqual(['test', 'test2', 'test3']);
  });

  it('extract and pipe correctly', () => {
    expect(parser('.items[].nested_items[] | { name: .name}')(input)).toEqual([{name: 'test'}, {name: 'test2'}, {name: 'test3'}]);
    expect(parser('.items[].nested_items[] | { name, name2 }')(input)).toEqual([{name: 'test', name2: 'test'}, {name: 'test2', name2: 'test2'}, {name: 'test3', name2: 'test3'}]);
    expect(parser('.items[].nested_items[] | { name, test: "test" }')(input)).toEqual([{name: 'test', test: 'test'}, {name: 'test2', test: 'test'}, {name: 'test3', test: 'test'}]);
  });
})
