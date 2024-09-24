export class Room {
    private number: number;
    private isAvailable: boolean;

    constructor(number: number) {
        this.number = number;
        this.isAvailable = true;
    }

    public getNumber(): number {
        return this.number;
    }

    public isRoomAvailable(): boolean {
        return this.isAvailable;
    }

    public reserveRoom(): void {
        if (this.isAvailable) {
            this.isAvailable = false;
        }
    }

    public releaseRoom(): void {
        this.isAvailable = true;
    }
}

