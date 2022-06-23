import { StyledToggle } from "./styles/Toggle.styled"

export default function Toggle() {
    return (
        <StyledToggle>
            <input id="theme-btn" type="checkbox" ></input>
            <span></span>
        </StyledToggle>
    )
}