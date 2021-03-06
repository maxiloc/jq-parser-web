export default {
  "tests_node_jq": [
    [
      "Identity",
      [
        ".",
        " .  "
      ],
      [
        [
          4
        ],
        {
          "foo": "bar"
        }
      ]
    ],
    [
      "Array Index",
      [
        ".[0]",
        ".[1 ]",
        ".[-1]",
        ".[ 1][0]",
        ".[1][1].x",
        ".[1][1].x[0]",
        ".[ -1 ]"
      ],
      [
        [
          0,
          [
            1,
            {
              "x": [
                "y"
              ]
            }
          ]
        ],
        [
          1,
          [
            1,
            {
              "x": [
                -1.1
              ]
            }
          ],
          3
        ]
      ]
    ],
    [
      "Object Identifier-Index",
      [
        ".foo",
        ".bar",
        ".bar.x",
        ".foo[1]"
      ],
      [
        {
          "foo": [
            3,
            1
          ],
          "bar": {
            "x": 3,
            "y": 0.5
          },
          "2bar": null,
          "a b": 0
        },
        {
          "foo": [
            4,
            1
          ],
          "bar": {
            "x": 3,
            "y": 0.5
          },
          "2bar": 1,
          "a b": "a b"
        }
      ]
    ],
    [
      "Generic Object Index",
      [
        ".[\"foo\"]",
        ".[\"bar\"].x",
        ".bar[ \"y\"]",
        ".[\"2bar\"]",
        ".[\"a b\" ]"
      ],
      [
        {
          "foo": [
            3,
            1
          ],
          "bar": {
            "x": 3,
            "y": 0.5
          },
          "2bar": null,
          "a b": 0
        },
        {
          "foo": [
            4,
            1
          ],
          "bar": {
            "x": 3,
            "y": 0.5
          },
          "2bar": 1,
          "a b": "a b"
        }
      ]
    ],
    [
      "Pipe",
      [
        ".a | .b",
        ".a|.b"
      ],
      [
        {
          "a": {
            "b": 4
          }
        },
        {
          "a": {
            "b": "oo"
          }
        }
      ]
    ],
    [
      "Parentheses",
      [
        "( .a)",
        "((.a))",
        "(-1 )",
        "(-5.5)",
        "(.4)",
        "(. | .)"
      ],
      [
        {
          "a": "a"
        },
        {
          "a": -5
        }
      ]
    ],
    [
      "Addition (numbers)",
      [
        "1 + 1",
        ".a + [.b][0]",
        ".b + .a",
        "3 + 4.1 + .a",
        "3 + (-3)"
      ],
      [
        {
          "a": 3,
          "b": 0
        },
        {
          "a": -3,
          "b": 1.1
        }
      ]
    ],
    [
      "Subtraction (numbers)",
      [
        ".a - .b",
        ".b - .a",
        "4- 3",
        "-3    -(4)"
      ],
      [
        {
          "a": 3,
          "b": 0
        },
        {
          "a": -3,
          "b": 1.1
        }
      ]
    ],
    [
      "Multiplication (numbers)",
      [
        "1 * 1",
        ".a * [.b][0]",
        ".b * .a",
        "3 * 4.1 * .a",
        "3 * (-.3)"
      ],
      [
        {
          "a": 3,
          "b": 0
        },
        {
          "a": -3,
          "b": 1.1
        }
      ]
    ],
    [
      "Modulo (numbers)",
      [
        "1 % 1",
        ".a % [.b][0]",
        ".b % .a",
        "3 % 4 % .a"
      ],
      [
        {
          "a": 3,
          "b": 2
        },
        {
          "a": -3,
          "b": 2
        }
      ]
    ],
    [
      "Division (numbers)",
      [
        ".a / .b",
        ".b / .a",
        "4/ 3",
        "-3/(4)",
        "-1.1 + (3 * (((.4 - .b) / .a) + .b))"
      ],
      [
        {
          "a": 3,
          "b": -1.1
        },
        {
          "a": -3,
          "b": 1.1
        }
      ]
    ],
    [
      "Array Construction",
      [
        "[]",
        "[ ]",
        "[4]",
        "[ -6, [0]]",
        "[7 | 4]",
        "[.]",
        "[. | [6]]",
        "[5, 6] | ."
      ],
      [
        [
          1
        ],
        {
          "a": "a"
        }
      ]
    ],
    [
      "Object Construction",
      [
        "{}",
        "{  }",
        "{\"foo\": 6}",
        "{\"foo\": 6, \"bar\": [5, 3]}",
        "{\"x\": 3} | {\"y\": .x}",
        "{foo: \"bar\"}",
        "{({\"a\": \"b\"} | .a): true}",
        "{\"a\": 4, \"b\": 3, \"c\": -1, \"d\": \"f\"}"
      ],
      [
        [
          1
        ],
        {
          "a": "a"
        }
      ]
    ],
    [
      "Integer literal",
      [
        "3",
        "  6",
        "-4",
        "0",
        "8"
      ],
      [
        [
          1
        ],
        {
          "a": "a"
        }
      ]
    ],
    [
      "Float literal",
      [
        ".3",
        "6.0",
        "-4.001",
        "3.14",
        "0.1"
      ],
      [
        [
          1
        ],
        {
          "a": "a"
        }
      ]
    ],
    [
      "Boolean literal",
      [
        "true",
        "false"
      ],
      [
        [
          1
        ],
        {
          "a": "a"
        }
      ]
    ],
    [
      "Double quote String literal",
      [
        "\"true\"",
        "\"false\"",
        "\"foo\"",
        "[\"ba'r\"]"
      ],
      [
        [
          1
        ],
        {
          "a": "a"
        }
      ]
    ],
    [
      "length",
      [
        "[] | length",
        "length"
      ],
      [
        [],
        [
          1
        ],
        [
          3,
          [
            3
          ]
        ]
      ]
    ],
    [
      "keys",
      [
        "keys"
      ],
      [
        {},
        {
          "a": 3
        },
        {
          "b": {
            "a": 3
          },
          "a": null
        }
      ]
    ],
    [
      "keys_unsorted",
      [
        "keys_unsorted"
      ],
      [
        {},
        {
          "a": 3
        },
        {
          "b": {
            "a": 3
          },
          "a": null
        }
      ]
    ],
    ["to_entries", [
      ". | to_entries"
    ], [
        {"id": 0, "name": "Mary", "age": 22},
        {"id": 1, "name": "Rupert", "age": 29},
        {"id": 2, "name": "Jane", "age": 11},
        {"id": 3, "name": "John", "age": 42}
    ]],
    ["from_entries", [
      ". | from_entries"
    ], [
      [{"key": "baz", "value": false}],
      [{"key": "baz", "value": false}, {"key": "foo", "value": "bar"}]
    ]],
    ["reverse", [". | reverse"], [
      [1, 2, 3, 4],
      [3, 1, 2],
      [3, "foo", 2, false, "bar", -3.14]
    ]],
    ["map", ["map(.+1 )", ". | map( {foo: .})"], [
      [1, 2, 3, 4],
      [4, 2]
    ]],
    ["map_values", ["map_values(.+1 )", ". | map_values( {foo: .})"], [
      {"a": 4, "b": 2},
      {"a": 4, "b": -1, "c": 0}
    ]],
    ["with_entries", [
      "with_entries({key: .key, value: (2 * .value)})",
      "with_entries({key: \"a\", value: (2 * .value)})"
    ], [
      {"foo": 2, "bar": -1},
      {"a": 2, "_": -1, "??": 0}
    ]],
    ["tostring", ["tostring"], [[1, -1, "1", "-1", "1.23", "-.1"], [1], {"a": 2}]],
    ["sort", ["sort", "[4, 5, 6] | sort"], [[1, -1], ["1", "-1", "1.23", "-.1"]]],
    ["sort_by", ["sort_by(-.)", "sort_by(1 + .)", "sort_by(1)"], [[1, -1], [4.12, 42.3, -342, 0, 32, 1, 2, 3, 6, 6]]],
    ["join", ["join(\", \")", "join(\"\")", "join(.[0])"], [["a","b,c,d","e"], ["foo"], [], ["foo", "bar"]]],
    ["Additive inverse", ["-(1 + 3)", "-(-1)", ".a | -(.b)", "[--1]"], [
        {"a": {"b": 3}},
        {"a": {"b": -3.1}}
    ]],
    ["bool expresions", ["\"toto\" == \"lol\"", "1 == 2", "1 == 1", "1 > 1"], [[{a: "a", b: "b"}, {a: "b", b: "b"}]]],
  ],
  "tests_jq_web": [
    ["select", [".[]", ".[] | select(.a == \"a\")"], [[{a: "a", b: "b"}, {a: "b", b: "b"}], [{a: "a", b: "b"}, {a: "a", b: "b"}, {a: "b", b: "b"}]]],
    ["map select", ["map(select(.a == \"a\"))"], [[{"a":"a","b":"b"}, {"a":"a","b":"b"}]]],
    ["array select", [".data | map(select(.type == \"express\"))"], [
      {
        "data": [
          {"type":"express","b":"b"}, {"a":"a","b":"b"}
        ]
      }   
    ]],
    ["tonumber", ["tonumber"], [1, -1, "1", "-1", "1.23", "-1"]],
    [
      "Array Construction",
      [
        "[]",
        "[4]"
      ],
      [
        [
          1
        ],
        {
          "a": "a"
        }
      ]
    ],
    [
      "Array/Object Value Iterator",
      [
        ".[]",
        ".[ ]"
      ],
      [
        [
          1,
          -1
        ],
        [
          "foo"
        ],
        {
          "foo": 1,
          "bar": -5.3
        },
        {
          "foo": []
        }
      ]
    ],
    [
      "Array/Object Value Iterator 2",
      [
        ".[\"foo\"][]",
        ".foo[]"
      ],
      [
        {
          "foo": [
            3,
            3
          ]
        }
      ]
    ],
    [
      "Pipe",
      [
        ".[] | .", ".[] | .name"
      ],
      [
         [
          {"name": "Mary", "age": 22},
          {"name": "Rupert", "age": 29},
          {"name": "Jane", "age": 11},
          {"name": "John", "age": 42}
        ]
      ]
    ],
    ["Stream as object value", [
        "{names: .[] | .name}", "{\"names\": .[] | .name, \"ages\": .[] | .age}",
        "{\"names\": .[] | .name, \"x\": 3}",
        "{\"names\": 5.4, \"x\": .[] | .age}",
        "{names: 5.4, ages: .[] | .age, ages2: .[] | .id}"
    ], [
        [
          {"id": 0, "name": "Mary", "age": 22},
          {"id": 1, "name": "Rupert", "age": 29},
          {"id": 2, "name": "Jane", "age": 11},
          {"id": 3, "name": "John", "age": 42}
        ]
    ]],
    ["Array/String slice", [".[2:4]", ".[0:1]"], [
        ["a","b","c","d","e"],
        [0, 3, "foo", -2, false, [true]],
        "Hello World!"
    ]]
  ]
}