import React, { useState } from 'react';
import {
  Container, Row, Col, Hidden,
} from 'react-grid-system';
import styled from 'styled-components';
import TopBar from '../common/TopBar';
import StartForm from './StartForm';
import FeatureBox from './FeatureBox';
import Button from '../common/Button';
import { colors } from '../common/colors';
import { createConnection } from '../../utils/socket';
import { getVideoId } from '../../utils/helper';

export default function Welcome(props) {
  const IntroMessage = styled.h1`
	font-weight: 500;
	margin: 0;
	padding: 0;
	font-size: 2.5em;
    `;

  const styles = {
    formContainer: {
      backgroundImage: 'linear-gradient(#f9f9f9, #fff)',
      marginBottom: '40px',
      zIndex: 10,
      height: '100vh',
    },
    heroButton: {
      margin: '15px 0',
      minWidth: '200px',
      padding: '15px 10px',
    },
  };

  let formEnd = null;
  const [hostLoading, setHostLoading] = useState(false);

  function scrollToForm() {
    if (formEnd) {
      formEnd.scrollIntoView({ behavior: 'smooth' });
    }
  }

  async function onHost(username, videoUrl) {
    setHostLoading(true);
    const videoId = getVideoId(videoUrl);
    const socket = await createConnection(username, null, videoId);
    setHostLoading(false);

    props.history.push({
      pathname: `/room/${socket.id}`, // socket.id === roomid
      state: { hostId: socket.id, username, videoId },
      socket,
    });
  }

  function onJoin(username, joinUrl) {
    const splitUrl = joinUrl.split('/');
    const roomId = splitUrl[splitUrl.length - 1];
    props.history.push({
      pathname: `/room/${roomId}`,
      state: { username },
    });
  }

  return (
    <>
      <TopBar />
      <Container fluid style={{ height: '92vh' }}>
        <Row style={{ paddingTop: '80px' }} align="center">
          <Hidden xs>
            <Col xs={2} />
          </Hidden>

          {/* --------- Intro Message -------- */}
          <Col xs={12} md={4}>
            <IntroMessage>
              Watch
              {' '}
              <span style={{ color: colors.primaryColor }}>
                Youtube
              </span>
              {' '}
               with Friends
            </IntroMessage>
            <Button
              style={styles.heroButton}
              onClick={scrollToForm}
              primary
            >
              Get Started
            </Button>
          </Col>

          <Col xs={12} md={5}>
            <img src="hero-banner.svg" alt="" />
          </Col>

          <Hidden xs>
            <Col xs={2} />
          </Hidden>
        </Row>
        <FeatureBox />
      </Container>

      <Container fluid>
        <Row align="center" style={styles.formContainer}>
          <Col md={2} />
          <StartForm
            onHost={onHost}
            onJoin={onJoin}
            hostLoading={hostLoading}
          />
          <Col md={2} />
          <div className="dummy" ref={(el) => (formEnd = el)} />
        </Row>
      </Container>
    </>
  );
}
