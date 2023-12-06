interface Props {
    items: { _id: string }[];
    updateItems: (data: any[]) => void;
    index: number;
}

export default function ItemButtonsPanel({ items, updateItems, index }: Props) {
    const removeItem = (index: number) => {
        const newItems = [...items.slice(0, index), ...items.slice(index + 1)];
        updateItems(newItems);
    }

    const moveUp = (index: number) => {
        if (index === 0) return;

        const newItems = [
            ...items.slice(0, index - 1),
            items[index],
            items[index - 1],
            ...items.slice(index + 1)
        ];
        updateItems(newItems);
    }

    const moveDown = (index: number) => {
        if (index === items.length - 1) return;

        const newItems = [
            ...items.slice(0, index),
            items[index + 1],
            items[index],
            ...items.slice(index + 2)
        ];
        updateItems(newItems);
    }

    return (
        <div className="flex flex-row">
            <button className="grow border border-black rounded-md" onClick={() => removeItem(index)}>Remove</button>
            {index !== 0 && <button className="border border-black rounded-md px-1" onClick={() => moveUp(index)}>&uarr;</button>}
            {index !== (items.length - 1) && <button className="border border-black rounded-md px-1" onClick={() => moveDown(index)}>&darr;</button>}
        </div>
    );
}
