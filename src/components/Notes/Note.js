import { MdDeleteForever } from 'react-icons/md';
import styles from './Note.module.css';

const Note = ({ text, date }) => {
  return (
    <div className={'note'}>
      <span>{text}</span>
      <div className={styles['note-footer']}>
        <small>{date}</small>
        <MdDeleteForever className={styles['delete-icon']} size={'1.3rem'} />
      </div>
    </div>
  );
};

export default Note;
