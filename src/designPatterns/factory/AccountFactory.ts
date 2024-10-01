interface Account {
    getPermissions(): string[];
}

class Admin implements Account {
    getPermissions(): string[] {
        return ["manage_users"];
    }
}

class Customer implements Account {
    getPermissions(): string[] {
        return ["purchase_items"];
    }
}

class Guest implements Account {
    getPermissions(): string[] {
        return ["view_content"];
    }
}

export class AccountFactory {
    static createAccount(accountType: string): Account {
        switch (accountType) {
            case "admin":
                return new Admin();
            case "customer":
                return new Customer();
            case "guest":
                return new Guest();
            default:
                throw new Error("Neplatný typ účtu");
        }
    }
}

