const { area_rec, area_sqr, area_trian,area_cir } = require('../operations/area');

test('Area of square of side 5 is equal to 25', () => {
    expect(area_sqr(5, 5)).toBe(25);
})
test('Area of rectangule of base 8 and height 5 is equal to 40', () => {
    expect(area_rec(8, 5)).toBe(40);
})
test('Area of rectangule of base 10 and height 5 is equal to 25', () => {
    expect(area_trian(10, 5)).toBe(25);
})
test('Area of crcle of radio 2 is equal to 12.566370614359172', () => {
    expect(area_cir(2)).toBe(12.566370614359172);
})