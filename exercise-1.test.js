const expect = require('expect');
const { store, load } = require('./exercise-1');

describe('Implement a store function and a load function', () => {
    it('should render text with a string-based format \"key1=value1;key2=value2\nkeyA=valueA\" when array given', () => {
        const array = [
            {
                key1: "value1",
                key2: "value2"
            }, {
                keyA: "valueA"
            }
        ];
        const expected = "key1=value1;key2=value2\nkeyA=valueA";

        const text = store(array);

        expect(array[1]['keyA']).toBe('valueA');

        expect(text).toEqual(expected);
    })

    it('throw error when not array given', () => {
        const string = 'test case';

        expect(() => store(string) ).toThrow();
    })

    describe('should return array below when text given with a string-based format \"key1=value1;key2=value2\nkeyA=valueA\"', () => {
        const text = "key1=value1;key2=value2\nkeyA=valueA";

        const array = load(text);

        it('detect object have key1 is value1 in array position 0', () => {
            expect(array[0]['key1']).toBe('value1');
        })

        it('detect object have key2 is value2 in array position 0', () => {
            expect(array[0]['key2']).toBe('value2');
        })

        it('detect object have keyA is valueA in array position 1', () => {
            expect(array[1]['keyA']).toBe('valueA');
        })

        it('detect array as expected', () => {
            const expected = [
                {
                    key1: "value1",
                    key2: "value2"
                }, {
                    keyA: "valueA"
                }
            ];
            
            expect(array).toEqual(expected);
        })
    })

    it('return throw error when not a string-based format given', () => {
        const text = new Object();

        expect(() => load(text)).toThrow();
    })
})