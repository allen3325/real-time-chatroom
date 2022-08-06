import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';

const Home = ({ username, setUsername, room, setRoom, socket }) => {
    const navigate = useNavigate();

    const joinRoom = () => {
        if (room !== '' && username !== '') {
            socket.emit('join_room', { username, room });
        }
        
        // Redirect
        navigate('/chat', { replace: true });
    };


    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>Real-Time-ChatRoom</h1>
                <input
                    className={styles.input}
                    placeholder='Please input your username'
                    onChange={(e) => setUsername(e.target.value)}
                />

                <select
                    className={styles.input}
                    onChange={(e) => setRoom(e.target.value)}
                >
                    <option>-- Select Room --</option>
                    <option value='javascript'>JavaScript</option>
                    <option value='react'>React</option>
                    <option value='java'>Java</option>
                    <option value='python'>Python</option>
                    <option value='cpp'>CPP</option>
                    <option value='c'>C</option>
                    <option value='c#'>C#</option>
                    <option value='php'>PHP</option>
                </select>

                <button
                    className='btn btn-primary'
                    style={{ width: '100%' }}
                    onClick={joinRoom}
                >Join Room</button>
            </div>
        </div>
    );
};

export default Home;