import Note from './Note';
import styles from './NoteList.module.css';

const NoteList = ({ notesData }) => {
  return (
    <section className={styles['note-list']}>
      {notesData.map(note => (
        <Note key={note.id} text={note.text} date={note.date} />
      ))}
    </section>
  );
};

export default NoteList;
