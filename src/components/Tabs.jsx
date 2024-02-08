export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    // setting default prop value for ButtonContainer

    return <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>

}
