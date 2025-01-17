const MyMessage = ({ message }) => {

    if (message?.attachments?.length > 0) {
        return <img src={message.attachments[0].file} alt="message-attachment" className="message-image" style={{float : 'right'}}>

        </img>
    }
    return (
        <div className="message" style={{float : 'right' , marginRight : '18px'  , color : 'white' , backgroundColor : '#0e2c87' }}>
           {message.text}
        </div>
    );
}

export default MyMessage;