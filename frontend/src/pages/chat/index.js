import styles from './styles.module.css';
import Messages from './message';
import SendMessage from './send-message';
import RoomAndUsers from './room-and-users';

const Chat = ({ username, room, socket }) => {
    return (
        <div className={styles.chatContainer}>
            <RoomAndUsers socket={socket} username={username} room={room} />
            <div>
                <Messages socket={socket} />
                <SendMessage socket={socket} username={username} room={room} />
            </div>
        </div>
    );
};

export default Chat;
