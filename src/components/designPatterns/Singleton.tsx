import {Logger} from "../../designPatterns/singleton/Logger.ts";

export const Singleton = () => {
    const logger1 = Logger.getInstance();
    logger1.logMessage("Aplikace byla spuštěna.");

    const logger2 = Logger.getInstance();
    logger2.logMessage("Uživatel se přihlásil.");

    console.log(logger1.getLogs()); // ["Aplikace byla spuštěna.", "Uživatel se přihlásil."]
    return (
        <div>
            Logger
            <p>Vypisuje se do konzole</p>
        </div>
    );
}
