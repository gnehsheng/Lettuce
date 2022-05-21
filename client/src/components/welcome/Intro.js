import React from 'react'
import styled from 'styled-components'
import Header from '../common/Header'

export default function Intro(props){
    const P = styled.p`
    font-size: 1em;
    `

    return(
        <React.Fragment>
            <Header>YT Party</Header>
            <P>Watch Youtube with your friends!</P>
        </React.Fragment>
    )
}