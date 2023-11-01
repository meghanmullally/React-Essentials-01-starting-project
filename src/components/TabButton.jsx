export default function TabButton({ children, onSelect, isSelected }) {
    // vanilla js
    // document.querySelector('button').addEventListener('click', ()=> {
    // })

    return (
        <liv>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </liv>
    );
}

