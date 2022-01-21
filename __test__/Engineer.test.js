const Engineer = require('../lib/Engineer');

test('creates new engineer class', () => {
    engineer = new Engineer('name', 'title', 'id', 'email', 'larry-david');

    expect(engineer.github).toBe('larry-david');
    expect(engineer.github).toEqual(expect.any(String));
})