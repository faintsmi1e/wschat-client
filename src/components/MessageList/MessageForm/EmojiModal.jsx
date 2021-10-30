import React, {useState} from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import Picker from 'emoji-picker-react';

const Emojimodal = ({ show,handlePickerClose, setMessageValue}) => {
  
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    
    setMessageValue((prevState, props) => {
      
      return prevState + chosenEmoji.emoji
    });
    
  };
  return (
    
    <Modal size='sm' centered show={show} onHide={handlePickerClose}>
        
        <Modal.Body>
          <Picker onEmojiClick={onEmojiClick}></Picker>
          
        </Modal.Body>
        
      </Modal>
  );
}

export default Emojimodal;
