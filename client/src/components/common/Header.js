import styled from 'styled-components';

export default function Header(props) {
    const StyledHeader = styled.h1`
        font-size: 1.8em;
        font-weight: 300;
        margin: 5px 0;
        `
    return (
        < StyledHeader >
            {props.children}
        </StyledHeader>
    )

}
