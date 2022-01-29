const Engineer = require('../lib/Engineer');

test('creates new engineer class', () => {
    engineer = new Engineer('name', 'Engineer', 'id', 'email', 'larry-david');

    expect(engineer.getGithub()).toBe('larry-david');
    expect(engineer.getRole()).toBe('Engineer');
})