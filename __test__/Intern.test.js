const Intern = require('../lib/Intern');

test('creates new intern object', () =>{
    intern = new Intern('name', 'title', 'id', 'email', 'hard-knox');

    expect(intern.school).toBe('hard-knox');
    expect(intern.school).toEqual(expect.any(String));
})