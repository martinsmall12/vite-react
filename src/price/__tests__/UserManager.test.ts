import UserManager from "../UserManager";


describe('UserManager', () => {
    beforeEach(() => {
        // Příprava: Ujistěte se, že seznam uživatelů je prázdný
        UserManager['users'] = [];
    });

    afterEach(() => {
        // Úklid: Reset seznamu uživatelů
        UserManager['users'] = [];
    });

    test('Přidání uživatele', () => {
        UserManager.addUser('Alice');
        expect(UserManager.getUsers()).toEqual(['Alice']);
    });

    test('Odebrání uživatele', () => {
        UserManager.addUser('Alice');
        UserManager.removeUser('Alice');
        expect(UserManager.getUsers()).toEqual([]);
    });

    test('Výjimka při pokusu o přidání existujícího uživatele', () => {
        UserManager.addUser('Alice');
        expect(() => UserManager.addUser('Alice')).toThrow('Uživatel již existuje');
    });

    test('Výjimka při pokusu o odstranění neexistujícího uživatele', () => {
        expect(() => UserManager.removeUser('Alice')).toThrow('Uživatel neexistuje');
    });

    test('Mockování asynchronní funkce fetchUserData', async () => {
        UserManager.addUser('Alice');
        jest.spyOn(UserManager, 'fetchUserData').mockResolvedValue({
            username: 'Alice',
            profile: 'Mocked profile data',
        });

        const data = await UserManager.fetchUserData('Alice');
        expect(data).toEqual({ username: 'Alice', profile: 'Mocked profile data' });
    });

    test('Asynchronní výjimka při načítání dat neexistujícího uživatele', async () => {
        // Mockování fetchUserData tak, aby vracela chybu pro neexistujícího uživatele
        jest.spyOn(UserManager, 'fetchUserData').mockImplementation(async (username) => {
            if (username !== 'Alice') {
                throw new Error('Uživatel neexistuje');
            }
            return { username, profile: 'Mocked profile data' };
        });

        await expect(UserManager.fetchUserData('Bob')).rejects.toThrow('Uživatel neexistuje');
    });
});
