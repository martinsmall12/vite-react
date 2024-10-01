import observable from "../../../designPatterns/observer/Observable.ts";

function handleClick() {
    observable.notify("User clicked button!");
}

function handleToggle() {
    observable.notify("User clicked second button!");
}

function logger(data: string) {
    console.log(`${Date.now()} ${data}`);
}

function toastify(data: string) {
    alert('Toast: ' + data);
}

observable.subscribe(logger);
observable.subscribe(toastify);

export const ObserverView = () => {
    return (
        <div>
            <button onClick={handleClick}>
                Click me!
            </button>
            <br />
            <hr />
            <button onClick={handleToggle}>
                Click me!
            </button>
        </div>
    );
}
