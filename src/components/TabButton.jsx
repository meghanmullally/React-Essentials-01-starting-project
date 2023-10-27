export default function TabButton({ children, onSelect }) {
    // vanilla js
    // document.querySelector('button').addEventListener('click', ()=> {
    // })

    return (
        <liv>
            <button onClick={onSelect}>{children}</button>
        </liv>
    );
}

