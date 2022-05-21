import styled from 'styled-components'

export function Label({ children, ...props }) {
    const StyledLabel = styled.label`
	display: flex;
	flex: 1;
	font-size: 0.95em;
	margin: 4px 0;
    `

    return (
        <StyledLabel {...props}>
            {children}
        </StyledLabel>
    )
}

export function Input(props) {
    const StyledInput = styled.input`
	display: flex;
	flex: 1;
	padding: 7px 11px;
	border: 1px solid transparent;
	border-color: #dbdbdb;
	outline: none;
	border-radius: 5px;
	box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
	font-size: 0.95em;
	font-family: inherit;
    `

    return (
        <StyledInput {...props} />
    )
}