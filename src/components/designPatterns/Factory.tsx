import {AccountFactory} from "../../designPatterns/factory/AccountFactory.ts";

export const Factory = () => {
    const admin = AccountFactory.createAccount("admin");
    console.log(admin.getPermissions()); // ["manage_users"]

    const guest = AccountFactory.createAccount("guest");
    console.log(guest.getPermissions()); // ["view_content"]


    return (
        <div>
            <h2>Factory</h2>
            <p>Factory je návrhový vzor, který umožňuje vytvářet objekty bez nutnosti znát konkrétní typ objektu.</p>
            <p>Umožňuje vytvářet objekty bez nutnosti znát konkrétní typ objektu.</p>
            <p>Account</p>
            <p>admin - {admin.getPermissions()}</p>
            <p>guest - {guest.getPermissions()}</p>
        </div>
    );
}
