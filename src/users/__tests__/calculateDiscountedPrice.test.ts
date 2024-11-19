import {calculateDiscountedPrice} from "../calculateDiscountedPrice";


describe('Calculate discounted price', () => {
    test('basic calculate', () => {
        expect(calculateDiscountedPrice(0, 0)).toBe(100);
    });
});
