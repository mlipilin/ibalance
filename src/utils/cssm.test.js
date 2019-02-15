import cssm from './cssm';

describe('src/utils/cssm.js', () => {
    it('', () => {
        const stylesMap = {
            a: 'a_hash',
            b: 'b_hash',
            c: 'c_hash',
        };
        expect(cssm(stylesMap, 'a b d', 'e')).toBe('a_hash b_hash e');
    });
});
