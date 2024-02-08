export default function TabButton({ children, isSelected, ...props }) {
    // vanilla js
    // document.querySelector('button').addEventListener('click', ()=> {
    // })

    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>
                {children}
                </button>
        </li>
    );
}

