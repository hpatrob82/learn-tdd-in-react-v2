
import React, { useState } from 'react';

const NewMessageForm = ({ onSend }) => {
    const [inputText, setInputText] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setInputText(e.target.value);
    }

  
    const handleClick = (e) => {
        e.preventDefault();
        onSend(inputText);
        setInputText('');
    }
    return (
        <div>
            <input type="text" data-testid="messageText" value={inputText} onChange={handleChange}/>
            <button data-testid="sendButton" onClick={handleClick}>Send</button>
        </div>
    )
}
export default NewMessageForm;