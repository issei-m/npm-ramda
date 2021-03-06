import R_omit = require('../ramda/dist/src/omit');

declare const object: object;
declare const string: string;

// @dts-jest:pass:snap -> Pick<object, never>
R_omit([string])(object);
// @dts-jest:pass:snap -> Pick<object, never>
R_omit([string], object);

// @dts-jest:pass:snap -> Pick<object, never>
R_omit([string])(object);
// @dts-jest:pass:snap -> Pick<object, never>
R_omit([string], object);

// @dts-jest:pass:snap -> Pick<{ a: number; b: number; c: number; }, "c">
R_omit(['a', 'b'], { a: 1, b: 2, c: 3 });
// @dts-jest:pass:snap -> Pick<{ a: number; b: number; c: number; }, "c">
R_omit(['a', 'b'])({ a: 1, b: 2, c: 3 });
