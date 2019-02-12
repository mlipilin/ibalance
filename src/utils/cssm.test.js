import cssm from './cssm';

describe('src/utils/cssm.js', () => {
    it('', () => {
        const styles = {
            a: 'a_hash',
            b: 'b_hash',
            c: 'c_hash',
        };
        expect(cssm(styles, 'a b d', 'e')).toBe('a_hash b_hash e_hash');
    });
});
