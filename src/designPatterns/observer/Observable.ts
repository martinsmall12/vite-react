type ObserverFunction = (data: string) => void;

class Observable {
    private observers: ObserverFunction[] = [];

    subscribe(f: ObserverFunction): void {
        this.observers.push(f);
    }

    unsubscribe(f: ObserverFunction): void {
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    notify(data: string): void {
        this.observers.forEach(observer => observer(data));
    }
}

export default new Observable();
