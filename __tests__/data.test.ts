import randomData from '../app/data';

describe('randomData', () => {
    test('should be an array', () => {
        expect(Array.isArray(randomData)).toBe(true);
    });

    test('should have 100 elements', () => {
        expect(randomData).toHaveLength(100);
    });

    // Additional test if you want to ensure every item is an object with x and y properties
    test('each element should be an object with x and y properties', () => {
        randomData.forEach(element => {
            expect(element).toHaveProperty('x');
            expect(element).toHaveProperty('y');
        });
    });
});
