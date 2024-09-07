const ThierMessage = (lastMessage, message) => {

    const ifFirstMessageByUser = !lastMessage || lastMessage.sender.username === message.senderusername
    return (
        <div className="message-row">
            {ifFirstMessageByUser && (
                <div className="message-avatar"
                    style={{ backgroundImage: 'url(${message?.sender?.avatar})' }}>

                </div>
            )}

            {
                (message?.attachments?.length > 0)
                    ? (
                        <img src={message.attachments[0].file} alt="message-attachment" className="message-image" style={{ marginLeft : ifFirstMessageByUser ? '4px' : '48px'  }}>

                        </img>
                    ) : (
                        <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC' ,  marginLeft : ifFirstMessageByUser ? '4px' : '48px'  }}>
                            MyMessage
                        </div>
                    )
            }


        </div>
    );
}

export default ThierMessage;