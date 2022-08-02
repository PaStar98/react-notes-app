import { useState } from 'react';
import styles from './AddNote.module.css';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = event => {
    if (noteText.length < characterLimit) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      setNoteText('');
      handleAddNote(noteText);
    }
  };

  return (
    <div className={`note ${styles.new}`}>
      <textarea
        rows={8}
        cols={10}
        placeholder={'Type to add a note'}
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className={'note-footer'}>
        <small>{`${characterLimit - noteText.length} Remaining`}</small>
        <button className={styles.btn} onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
