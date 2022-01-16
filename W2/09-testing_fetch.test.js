const { fetchInModule } = require('./fetch_module')

describe('mocking fetch', () => {

  beforeAll(() => {
    // "global" is in node like "window" for the browsers
    global.fetch = jest.fn();
  })

  it('mocks fetch', async () => {
    fetch.mockResolvedValueOnce('default')
    let foo = await fetch()
    expect(foo).toBe('default')
  });

  it('mocks fetch twice', async () => {
    fetch.mockResolvedValueOnce('first call')
    fetch.mockResolvedValueOnce('second call')
    let foo = await fetch()
    let bar = await fetch()
    expect(foo).toBe('first call')
    expect(bar).toBe('second call')
  });

  it('works in a module', async () => {
    fetch.mockResolvedValue('banana')
    let foo = await fetchInModule()
    expect(foo).toBe('banana')
  });
});
