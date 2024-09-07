import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import ThierMessage from "./ThierMessage";
const ChatFeed = (props) => {

    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];
    console.log(chat, userName, messages);
    const renderMessage = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMymessage = userName === message.sender.username;

            return (
                <div key={'msg_${index}'} style={{ width: '100%' }}>
                    <div className="message-block">
                        {isMymessage ? <MyMessage message={message} /> : <ThierMessage message={message} lastMessage = {messages[lastMessageKey]} />}
                    </div>

                    <div className="read-receipts" style={{ marginRight: isMymessage ? '18px' : '0px', marginLeft: isMymessage ? '0px' : '68px' }}>
                        read-receipts

                    </div>


                </div>
            )
        })
    }


    // cheking if thers not chat then show a loading indicator!
    // add a Loading logo later 

    if (!chat) {
        return 'Loading ....'
    }
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                    {chat?.title}
                </div>

                <div className="chat-subtitle">
                        {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>

            {renderMessage()}
            <div style={{height : '100px'}}/>
            <div className="message-form-container"></div>
            <MessageForm {...props} chatId={activeChat} />

        </div>
    )
}



export default ChatFeed;