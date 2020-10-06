import loginApi from './login.api';

describe('Login api', () => {
    it('returns expected result', async () => {
        const result = await loginApi("wizeline", "Rocks!")
        
        expect(result).toEqual(expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
            avatarUrl: expect.any(String),
          }));
    })
})