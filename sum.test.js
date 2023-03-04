const { capitalize, reverse, caesarChiper, analyzeArray } = require("./scripts");

//          Capitalize Function

// test("capitalize word book", () => {
//   expect(capitalize("book")).toBe("Book");
// });

// test("capitalize an upper case word", () => {
//   expect(capitalize("WORD")).toBe("Word");
// });

// test("input is not a string", () => {
//   expect(capitalize(3)).toBe("This is not a string");
// });

// test("input an empty string", () => {
//   expect(capitalize("")).toBe("This is an empty string");
// });

//          Reverse String
// test("input an empty string", () => {
//   expect(reverse("")).toBe("This is an empty string");
// });

// test("input a capitalized word", () => {
//   expect(reverse("WORD")).toBe("DROW");
// });

// test("input a not capitalized word", () => {
//   expect(reverse("word")).toBe("drow");
// });

// test("input a number", () => {
//   expect(reverse(0)).toBe("This is not a string");
// });



//              caesarChiper chiper 
test("works with single letters", () => {
    expect(caesarChiper('A', 1)).toBe('B');
});

test('works with words and keeps the case', function() {
    expect(caesarChiper('Aaa', 1)).toEqual('Bbb');
});
2
test('works with phrases', function() {
    expect(caesarChiper('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
});

test('works with negative shift', function() {
    expect(caesarChiper('Mjqqt, Btwqi!', -5)).toEqual('Hello, World!');
});

test('wraps', function() {
    expect(caesarChiper('Z', 1)).toEqual('A');
});

test('works with large shift factors', function() {
    expect(caesarChiper('Hello, World!', 75)).toEqual('Ebiil, Tloia!');
});

test('works with large negative shift factors', function() {
    expect(caesarChiper('Hello, World!', -29)).toEqual('Ebiil, Tloia!');
});




//           analyze array


// const object = analyzeArray([1,8,3,4,2,6]);

// test("should return correct average", () => {
//     expect(object.average).toEqual(4);
// });

// test("should return correct min", () => {
//     expect(object.min).toEqual(1);
// });

// test("should return correct max", () => {
//     expect(object.max).toEqual(8);
// });

// test("should return correct array length", () => {
//     expect(object.length).toEqual(6);
// });

// test("should throw an error message if array contents are not numbers", () => {
//     expect(() => analyzeArray([1,"eight",3,4,2,6])).toThrow("invalid input");
// });

// test("should throw an error if array is empty", () => {
//     expect(() => analyzeArray([])).toThrow("array is empty");
//     });


// test("should throw an error if input in undefined", () => {
//     expect(() => analyzeArray()).toThrow("invalid input");
// });