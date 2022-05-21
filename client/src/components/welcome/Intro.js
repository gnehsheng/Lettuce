import styled from 'styled-components';
import Header from '../common/Header';

export default function Intro() {
  const P = styled.p`
    font-size: 1em;
    `;

  return (
      <>
            <Header>YT Party</Header>
            <P>Watch Youtube with your friends!</P>
        </>
  );
}
