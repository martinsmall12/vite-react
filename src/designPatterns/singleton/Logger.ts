export class Logger {
    private static instance: Logger;
    private logs: string[] = [];

    private constructor() {}

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public logMessage(message: string): void {
        this.logs.push(message);
        console.log(`Log: ${message}`);
    }

    public getLogs(): string[] {
        return this.logs;
    }
}
