class UserManager {
    private users: string[] = [];

    addUser(username: string): void {
        if (this.users.includes(username)) {
            throw new Error('Uživatel již existuje');
        }
        this.users.push(username);
    }

    removeUser(username: string): void {
        const index = this.users.indexOf(username);
        if (index === -1) {
            throw new Error('Uživatel neexistuje');
        }
        this.users.splice(index, 1);
    }

    getUsers(): string[] {
        return [...this.users];
    }

    async fetchUserData(username: string): Promise<object> {
        if (!this.users.includes(username)) {
            throw new Error('Uživatel neexistuje');
        }

        // Simulace asynchronního načítání dat
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ username, profile: 'User profile data' });
            }, 1000);
        });
    }
}

export default new UserManager();
