import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
  const handleDelete = () => {
    handleDeleteNote(id);
  };

  return (
    <div className={'note'}>
      <span>{text}</span>
      <div className={'note-footer'}>
        <small>{date}</small>
        <MdDeleteForever
          size={'1.3rem'}
          className={'delete-btn'}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default Note;
