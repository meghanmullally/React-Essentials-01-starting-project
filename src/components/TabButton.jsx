export default function TabButton({ children, isSelected, ...props }) {
    // vanilla js
    // document.querySelector('button').addEventListener('click', ()=> {
    // })

    return (
        <liv>
            <button className={isSelected ? 'active' : undefined} {...props}>
                {children}
                </button>
        </liv>
    );
}

