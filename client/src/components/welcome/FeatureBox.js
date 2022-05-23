import { Row, Col, Hidden } from 'react-grid-system';
import styled from 'styled-components';
import { colors } from '../common/colors';
import { BiTv, BiSync, BiMessageAltDetail } from "react-icons/bi";

const StyledBox = styled.div`
	display: flex;
	height: 160px;
	align-items: center;
	margin: 5%;
	padding: 5%;
	text-align: center;
	justify-content: center;
	border-radius: 10px;
	margin-bottom: 15px;
	flex-direction: column;
	font-size: 0.9em;
	font-weight: 500;
	box-sizing: border-box;
	box-shadow: 1px 1px 2px #ddd;
`

function FeatureBox() {
  return (
    <Row style={{ marginTop: '80px' }}>
      <Hidden xs>
        <Col xs={3} />
      </Hidden>

      <Col xs={12} md={2}>
        <Box>
          <BiTv />
          <br />
          Host Video in a room</Box>
      </Col>
      <Col xs={12} md={2}>
        <Box>
          <BiSync />
          <br />
          Sync video with each other</Box>
      </Col>
      <Col xs={12} md={2}>
        <Box>
          <BiMessageAltDetail />
          <br />
          Live chat with friends</Box>
      </Col>

      <Hidden xs>
        <Col xs={3} />
      </Hidden>
    </Row>
  );
}

function Box(props) {
  return (
    <StyledBox>
      <ion-icon
        name={props.icon}
        style={{
          fontSize: '2em',
          paddingBottom: '10px',
          color: colors.primaryColor,
        }}
      />
      <div>{props.children}</div>
    </StyledBox>
  );
}


export default FeatureBox;
