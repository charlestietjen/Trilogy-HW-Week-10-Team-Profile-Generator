const Intern = require('../lib/Intern');

test('creates new intern object', () =>{
    intern = new Intern('name', 'title', 'id', 'email', 'hard-knox');

    expect(intern.special).toBe('hard-knox');
    expect(intern.special).toEqual(expect.any(String));
})