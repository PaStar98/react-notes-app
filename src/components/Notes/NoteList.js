import Note from './Note';
import AddNote from './AddNote';
import styles from './NoteList.module.css';

const NoteList = ({ notesData, handleAddNote }) => {
  return (
    <section className={styles['note-list']}>
      {notesData.map(note => (
        <Note key={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </section>
  );
};

export default NoteList;
