import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Swal from 'sweetalert2';
import TopBar from '../common/TopBar';
import Player from './Player';
import Options from './Options';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { createConnection, bindSocketEvents } from '../../utils/socket';
import { getVideoId } from '../../utils/helper';
import { SignalContext } from '../../contexts/SignalContext';
import { UserContext } from '../../contexts/UserContext';

export default function Room(props) {
  const showInviteModal = async () => {
    await Swal.fire({
      title: 'Invite friends with this link',
      input: 'text',
      inputValue: window.location.href,
      confirmButtonText: 'Copy',
      inputAttributes: {
        readOnly: true,
      },
      width: '40%',
      onClose: () => {
        document.getElementsByClassName('swal2-input')[0].select();
        document.execCommand('copy');
      },
    });
  };

  const askVideoURL = async () => {
    const { value: url } = await Swal.fire({
      title: 'YouTube Video URL',
      input: 'url',
      inputPlaceholder: 'https://www.youtube.com/',
    });

    return url;
  };

  const onVideoChange = async () => {
    const newURL = await askVideoURL();

    if (newURL && socket) {
      console.log(_socket);
      const videoId = getVideoId(newURL);
      socket.emit('changeVideo', { videoId });
    }
  };

  const alertNotImplemented = () => {
    alert('Not implemented');
  };
  // eslint-disable-next-line
    const [isHost, setIsHost] = useState(false)
  const [socket, setSocket] = useState(null);
  const [roomLoading, setRoomLoading] = useState(true);

  const { dispatch: userDispatch, userData } = useContext(UserContext);
  const { dispatch: signalDispatch } = useContext(SignalContext);

  let _isHost = false;
  let _socket = null;

  async function init() {
    const hostId = props.location.state && props.location.state.hostId;
    const videoId = props.location.state && props.location.state.videoId;
    let username = props.location.state && props.location.state.username;

    if (!hostId) {
      _isHost = false;

      if (!username) {
        const usernamePrompt = await Swal.fire({
          title: 'Enter your username',
          input: 'text',
          allowOutsideClick: false,
        });
        username = usernamePrompt.value;
      }

      const roomId = props.match.params.id;
      _socket = await createConnection(username, roomId);
    } else {
      _isHost = true;
      _socket = props.location.socket;

      userDispatch({ type: 'UPDATE_VIDEO_ID', videoId });
      showInviteModal();
    }

    userDispatch({ type: 'UPDATE_USERNAME', username });

    setIsHost(_isHost);
    setSocket(_socket);
    bindSocketEvents(_socket, {
      userDispatch,
      signalDispatch,
    });
    setRoomLoading(false);
  }

  useEffect(
    () => {
      init();
    }, // eslint-disable-next-line
        []
  );

  return (
    <>
      <TopBar />
      {roomLoading ? (
        <LoadingSpinner />
      ) : (
        <Container fluid style={{ margin: '0 3%' }}>
          <Row>
            <Col md={8}>
              <Player socket={socket} videoId={userData.videoId} />
            </Col>
            <Col md={4}>
              <Options onInvite={showInviteModal} alertNotImplemented={alertNotImplemented} onVideoChange={onVideoChange} />

            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
