const getRepos = require(".");

describe('', () => {
  it('', async () => {
    const names = await getRepos('https://api.github.com/users/tryber/repos');
    
    expect(names).not.toContain('sd-01-week4-5-project-todo-list');
    expect(names).not.toContain('sd-01-week4-5-project-meme-generator');
  });
});