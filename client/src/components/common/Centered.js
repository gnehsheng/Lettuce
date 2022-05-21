import styled from 'styled-components';

export default function Centered(props) {
  const StyledCentered = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
    `;
  return (
    <StyledCentered>
      {props.children}
    </StyledCentered>
  );
}
