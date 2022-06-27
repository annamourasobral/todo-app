import { StyledToggle } from "./styles/Toggle.styled"

export default function Toggle( { switchTheme } ) {
    return (
        <StyledToggle>
            <input onChange={switchTheme} id="theme-btn" type="checkbox" ></input>
            <span></span>
        </StyledToggle>
    )
}