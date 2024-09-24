import React, { useState } from 'react';
import { Hotel } from './hotel/Hotel';
import { Room } from './hotel/Room';
import { Suite } from './hotel/Suite';
import { Guest } from './hotel/Guest';

import './App.css';

const hotel = new Hotel();

const App: React.FC = () => {
    // Stavy pro přidání pokoje
    const [roomNumberAdd, setRoomNumberAdd] = useState('');
    const [roomType, setRoomType] = useState('standard');

    // Stavy pro rezervaci pokoje
    const [guestNameReserve, setGuestNameReserve] = useState('');
    const [roomNumberReserve, setRoomNumberReserve] = useState('');
    const [reservationInfo, setReservationInfo] = useState('');

    // Stavy pro zrušení rezervace
    const [guestNameCancel, setGuestNameCancel] = useState('');
    const [roomNumberCancel, setRoomNumberCancel] = useState('');
    const [cancelInfo, setCancelInfo] = useState('');

    // Stav pro dostupné pokoje
    const [availableRooms, setAvailableRooms] = useState<Room[]>([]);

    const handleAddRoom = (event: React.FormEvent) => {
        event.preventDefault();
        const roomNum = parseInt(roomNumberAdd, 10);
        if (roomType === 'suite') {
            hotel.addRoom(new Suite(roomNum, true));
        } else {
            hotel.addRoom(new Room(roomNum));
        }
        setRoomNumberAdd('');
        alert(`Pokoj ${roomNum} přidán.`);
    };

    const handleReservation = (event: React.FormEvent) => {
        event.preventDefault();
        const roomNum = parseInt(roomNumberReserve, 10);
        const guest = new Guest(guestNameReserve);
        const reservation = hotel.createReservation(guest, roomNum);
        if (reservation) {
            setReservationInfo(reservation.getDetails());
        } else {
            setReservationInfo('Pokoj není dostupný nebo neexistuje.');
        }
        setGuestNameReserve('');
        setRoomNumberReserve('');
    };

    const handleCancelReservation = (event: React.FormEvent) => {
        event.preventDefault();
        const roomNum = parseInt(roomNumberCancel, 10);
        const guest = new Guest(guestNameCancel);
        hotel.cancelReservation(guest, roomNum);
        setCancelInfo(`Rezervace pro ${guestNameCancel} na pokoj ${roomNum} byla zrušena.`);
        setGuestNameCancel('');
        setRoomNumberCancel('');
    };

    const handleShowAvailableRooms = () => {
        setAvailableRooms(hotel.listAvailableRooms());
    };

    return (
        <div>
            <h1>Hotelový rezervační systém</h1>

            {/* Přidání pokoje */}
            <form onSubmit={handleAddRoom}>
                <h2>Přidat pokoj</h2>
                <input
                    type="text"
                    value={roomNumberAdd}
                    onChange={(e) => setRoomNumberAdd(e.target.value)}
                    placeholder="Číslo pokoje"
                    required
                />
                <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                >
                    <option value="standard">Standardní pokoj</option>
                    <option value="suite">Apartmá</option>
                </select>
                <button type="submit">Přidat pokoj</button>
            </form>

            {/* Vytvoření rezervace */}
            <form onSubmit={handleReservation}>
                <h2>Rezervace pokoje</h2>
                <input
                    type="text"
                    value={guestNameReserve}
                    onChange={(e) => setGuestNameReserve(e.target.value)}
                    placeholder="Jméno hosta"
                    required
                />
                <input
                    type="text"
                    value={roomNumberReserve}
                    onChange={(e) => setRoomNumberReserve(e.target.value)}
                    placeholder="Číslo pokoje"
                    required
                />
                <button type="submit">Rezervovat pokoj</button>
            </form>

            {/* Zobrazení výsledků rezervace */}
            {reservationInfo && <p className="result-info">{reservationInfo}</p>}

            {/* Zrušení rezervace */}
            <form onSubmit={handleCancelReservation}>
                <h2>Zrušení rezervace</h2>
                <input
                    type="text"
                    value={guestNameCancel}
                    onChange={(e) => setGuestNameCancel(e.target.value)}
                    placeholder="Jméno hosta"
                    required
                />
                <input
                    type="text"
                    value={roomNumberCancel}
                    onChange={(e) => setRoomNumberCancel(e.target.value)}
                    placeholder="Číslo pokoje"
                    required
                />
                <button type="submit">Zrušit rezervaci</button>
            </form>

            {/* Zobrazení výsledků zrušení rezervace */}
            {cancelInfo && <p className="result-info">{cancelInfo}</p>}

            {/* Zobrazení dostupných pokojů */}
            <h2>Dostupné pokoje</h2>
            <button onClick={handleShowAvailableRooms} id="showRooms">Zobrazit dostupné pokoje</button>
            {availableRooms.length > 0 ? (
                <ul>
                    {availableRooms.map((room, index) => (
                        <li key={index}>Pokoj {room.getNumber()}</li>
                    ))}
                </ul>
            ) : (
                <p>Žádné dostupné pokoje.</p>
            )}
        </div>
    );
};

export default App;
