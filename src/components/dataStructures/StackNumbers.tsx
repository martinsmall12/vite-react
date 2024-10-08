import Stack from "../../dataStructures/Stack.ts";

export const StackNumbers = () => {
    const stack = new Stack<number>();

    stack.push(10);
    stack.push(20);
    stack.push(30);

    let sum = 0;
    while (!stack.isEmpty()) {
        const value = stack.pop();
        if (value !== undefined) {
            sum += value;
        }
    }

    console.log('Součet čísel v zásobníku:', sum);

    return (
        <div>
            <h2>Stack</h2>
            <p>Stack je zásobník, který umožňuje ukládat prvky a následně je zase odebírat.</p>
            <p>Součet čísel v zásobníku: {sum}</p>
        </div>
    );
}
