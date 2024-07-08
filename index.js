import _ from 'lodash';

const object = { a: [{ b: { c: 3 } }] };

let obj;
beforeEach(() => {
  obj = _.cloneDeep(object);
});

test("first flow", () => {
  _.set(obj, 'a[0].b.c', 6);
  expect(obj.a[0].b.c).toEqual(6);
});

test("second flow", () => {
  _.set(obj, ['x', '0', 'y', 'z'], 8);
  expect(obj.x[0].y.z).toEqual(8);
});
