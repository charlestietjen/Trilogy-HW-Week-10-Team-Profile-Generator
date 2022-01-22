const Engineer = require('../lib/Engineer');

test('creates new engineer class', () => {
    engineer = new Engineer('name', 'title', 'id', 'email', 'larry-david');

    expect(engineer.special).toBe('larry-david');
    expect(engineer.special).toEqual(expect.any(String));
})