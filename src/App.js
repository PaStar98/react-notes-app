import { useState } from 'react';
import { nanoid } from 'nanoid';
import NoteList from './components/Notes/NoteList';
import Layout from './components/layout/Layout';

const App = () => {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: 'This is my first note!', date: '15/04/2022' },
    { id: nanoid(), text: 'This is my second note!', date: '21/12/2022' },
    { id: nanoid(), text: 'There is another note here!', date: '11/11/2022' },
  ]);

  return (
    <Layout>
      <NoteList notesData={notes} />
    </Layout>
  );
};

export default App;
