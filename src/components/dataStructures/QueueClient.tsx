import Queue from "../../dataStructures/Queue.ts";

export const QueueClient = () => {
    const queue = new Queue<string>();

    queue.enqueue('Klient 1');
    queue.enqueue('Klient 2');
    queue.enqueue('Klient 3');

    while (!queue.isEmpty()) {
        const client = queue.dequeue();
        console.log('Obsluhujeme:', client);
    }

    return (
        <div>
            <h2>Fronta</h2>
            <p>Fronta je datová struktura, která funguje na principu FIFO (First In First Out).</p>
        </div>
    );
}

export default QueueClient;
