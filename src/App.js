import { useState } from 'react';
import { nanoid } from 'nanoid';
import NoteList from './components/Notes/NoteList';
import Layout from './components/layout/Layout';

const App = () => {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: 'This is my first note!', date: '15/04/2022' },
    { id: nanoid(), text: 'This is my second note!', date: '21/12/2022' },
    { id: nanoid(), text: 'There is another note here!', date: '11/11/2022' },
    { id: nanoid(), text: 'This is my new note!', date: '31/07/2022' },
  ]);

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

  return (
    <Layout>
      <NoteList notesData={notes} handleAddNote={addNote} />
    </Layout>
  );
};

export default App;

// todo: compare code with tutorial, make sure that drilling addNote fn work properly
// https://www.youtube.com/watch?v=8KB3DHI-QbM
// 39 min
