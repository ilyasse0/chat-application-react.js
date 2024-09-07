import { useState } from 'react';
import { sendMessage , isTyping } from 'react-chat-engine'; 
import { SendOutlined , PrinterOutlined } from '@ant-design/icons'; 
const MessageForm = (props) => {



    const [value, setValue] = useState('');
    const { chatId , creds } = props;


    const handleSubmit = (event) => {
        event.preventDefault();
        const text = value.trim();
        if(text.length>0){
            sendMessage(creds , chatId , {text});
            
        }
        setValue('');
    }



    const handlerChange = (event) => {
        setValue(event.target.value);
        isTyping(props , chatId)

    }

    const handlerUpload = (event) => {
         sendMessage(creds , chatId , {files : event.target.value, text : ''});
    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handlerChange}
                onSubmit={handleSubmit} />

            
            <label htmlFor="uploading the button">
                <span className='image-button'>
                    <PrinterOutlined className='picture-icon' />
                </span>
            </label>
            <input type="file" 
            multiple={false}
            id="uplad-button"
            style={{display : 'none'}}
            onChange={handlerUpload} />
            

        </form>
    );
}

export default MessageForm; 