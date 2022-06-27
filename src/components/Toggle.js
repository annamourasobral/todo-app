import { StyledToggle } from "./styles/Toggle.styled"

export default function Toggle({switchTheme}) {
    return (
        <StyledToggle>
            <input onClick={switchTheme} id="theme-btn" type="checkbox" ></input>
            <span></span>
        </StyledToggle>
    )
}