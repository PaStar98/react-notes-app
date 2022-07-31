import { MdDeleteForever } from 'react-icons/md';

const Note = ({ text, date }) => {
  return (
    <div className={'note'}>
      <span>{text}</span>
      <div className={'note-footer'}>
        <small>{date}</small>
        <MdDeleteForever size={'1.3rem'} />
      </div>
    </div>
  );
};

export default Note;
