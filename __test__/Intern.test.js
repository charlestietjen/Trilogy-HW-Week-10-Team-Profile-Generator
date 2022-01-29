const Intern = require('../lib/Intern');

test('creates new intern object', () =>{
    intern = new Intern('name', 'Intern', 'id', 'email', 'hard-knox');

    expect(intern.getSchool()).toBe('hard-knox');
    expect(intern.getRole()).toBe('Intern')
})