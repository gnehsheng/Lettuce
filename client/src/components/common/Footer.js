import styled from 'styled-components'

export default function Footer(props) {
    const StyledFooter = styled.div`
	height: 45px;
	margin-top: -45px;
	display: flex;
	flex-direction: column;
	position: relative;
	flex: 1;
	align-items: center;
	justify-content: center;
	font-size: 0.9em;
	font-weight: 500;
	flex-wrap: wrap;
	padding: 0 5%;
	text-align: center;
    `
    return (
        <StyledFooter>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                Created by Ng Yong Sheng (Source at
                <a
                    href={'https://github.com/gnehsheng?tab=repositories'}
                    target='_blank'
                >
                    &nbsp;github
                </a>)
            </div>
        </StyledFooter>
    )
}