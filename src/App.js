import logo from './logo.svg';
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';



function App() {
  return (
    <ChatEngine
        height="100vh"
        projectID="cd1fc56e-1ce1-40bc-aa41-972bfa082626"
        userName="ilyasse"
        userSecret="123"
        renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />

        }

    />
  );
}

export default App;
