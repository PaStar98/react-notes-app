import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Layout from './components/layout/Layout';
import NoteList from './components/Notes/NoteList';
import Header from './components/layout/Header';

const NOTES_INIT_STATE = [
  { id: nanoid(), text: 'This is my first note!', date: '15/04/2022' },
  { id: nanoid(), text: 'This is my second note!', date: '21/12/2022' },
  { id: nanoid(), text: 'There is another note here!', date: '11/11/2022' },
  { id: nanoid(), text: 'This is my new note!', date: '31/07/2022' },
];

const App = () => {
  const [notes, setNotes] = useState(NOTES_INIT_STATE);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = text => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = id => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Layout darkModeData={darkMode}>
      <Header
        handleSearchNote={setSearchText}
        handleToggleDarkMode={setDarkMode}
      />
      <NoteList
        notesData={notes.filter(note =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </Layout>
  );
};

export default App;
