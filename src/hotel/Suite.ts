import {Room} from "./Room.ts";

export class Suite extends Room {
    private hasMinibar: boolean;

    constructor(number: number, hasMinibar: boolean) {
        super(number);
        this.hasMinibar = hasMinibar;
    }

    public checkMinibar(): boolean {
        return this.hasMinibar;
    }
}
