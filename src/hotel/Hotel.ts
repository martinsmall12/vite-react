import { Room } from './Room';
import { Guest } from './Guest';
import { Reservation } from './Reservation';

export class Hotel {
    private rooms: Room[] = [];
    private reservations: Reservation[] = [];

    public addRoom(room: Room): void {
        this.rooms.push(room);
    }

    public listAvailableRooms(): Room[] {
        return this.rooms.filter(room => room.isRoomAvailable());
    }

    public createReservation(guest: Guest, roomNumber: number): Reservation | null {
        const room = this.rooms.find(r => r.getNumber() === roomNumber);

        if (room && room.isRoomAvailable()) {
            const reservation = new Reservation(guest, room);
            this.reservations.push(reservation);
            return reservation;
        }
        return null;
    }

    public cancelReservation(guest: Guest, roomNumber: number): void {
        const reservationIndex = this.reservations.findIndex(
            r => r['guest'].getName() === guest.getName() && r['room'].getNumber() === roomNumber
        );

        if (reservationIndex >= 0) {
            const reservation = this.reservations[reservationIndex];
            reservation.cancelReservation(); // Uvolní pokoj
            this.reservations.splice(reservationIndex, 1); // Odstraní rezervaci
            console.log(`Rezervace pro ${guest.getName()} na pokoj ${roomNumber} byla zrušena.`);
        } else {
            console.log(`Rezervace pro ${guest.getName()} na pokoj ${roomNumber} nebyla nalezena.`);
        }
    }

}

