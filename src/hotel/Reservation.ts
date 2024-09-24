import {Guest} from "./Guest.ts";
import {Room} from "./Room.ts";

export class Reservation {
    private guest: Guest;
    private room: Room;

    constructor(guest: Guest, room: Room) {
        this.guest = guest;
        this.room = room;
        this.room.reserveRoom();
    }

    public getDetails(): string {
        return `${this.guest.getName()} rezervoval(a) pokoj ${this.room.getNumber()}.`;
    }

    public cancelReservation(): void {
        this.room.releaseRoom();
    }
}
